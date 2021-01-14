import torch
import torchvision
import torchvision.transforms as transforms

transform = transforms.Compose(
    [transforms.ToTensor(),
     transforms.Normalize((0.1307), (0.3081))])

testset = torchvision.datasets.MNIST(root='./data', train=False,
                                       download=True, transform=transform)
testloader = torch.utils.data.DataLoader(testset, batch_size=4,
                                         shuffle=False, num_workers=2)


import torch.nn as nn
import torch.nn.functional as F


class Net(nn.Module):
    def __init__(self):
        super(Net, self).__init__()
        self.conv1 = nn.Conv2d(1, 12, 5)
        self.pool = nn.MaxPool2d(2, 2)
        self.conv2 = nn.Conv2d(12, 72, 5)
        self.conv3 = nn.Conv2d(72,144,5, padding=2)
        self.fc1 = nn.Linear(144 * 4 * 4, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = F.relu(self.conv3(x))
        x = x.view(-1, 144 * 4 * 4)
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x


net = Net()


PATH = './cifar_net.pth'
net.load_state_dict(torch.load(PATH, map_location=torch.device("cpu")))

from flask import Flask,request, redirect, url_for, session

app = Flask(__name__,
            static_url_path='' ,
            static_folder='static')

@app.route("/")
def index():
    return app.send_static_file("index.html")

@app.route('/evaluate', methods=['POST'])
def parse_request():
    data = request.json
    if "inputted" in data:
        tensor = torch.full((28,28), 0.0)
        print(data)
        if data == None or type(data["inputted"]) is not list:
            return "", 401
        for cord in data["inputted"]:
            if type(cord) is not list or type(cord[0]) is not int or type(cord[1]) is not int:
                return "",401
            tensor[cord[0]][cord[1]] = 1.0
        i = tensor.unsqueeze(0)
        to_use = transforms.Normalize((0.1307), (0.3081))(i)
        with torch.no_grad():
            outputs = net(to_use.unsqueeze(0))
            _, predicted = torch.max(outputs.data, 1)
            return str(predicted.item()), 200
    return "", 401


