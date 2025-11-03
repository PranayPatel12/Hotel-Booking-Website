provider "aws" {
    region = var.aws_region
}


resource "aws_key_pair" "deployer" {
    key_name = var.ssh_key_name
    public_key = file(var.ssh_public_key_path)
}


resource "aws_security_group" "web_sg" {
    name = "mern-web-sg"
    description = "Allow SSH, HTTP, HTTPS"

    ingress {
        from_port = 22
        to_port = 22
        protocol = "tcp"
        cidr_blocks = [var.admin_ip_cidr]
    }

    ingress {
        from_port = 80
        to_port = 80
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    ingress {
        from_port = 443
        to_port = 443
        protocol = "tcp"
        cidr_blocks = ["0.0.0.0/0"]
    }

    egress {
        from_port = 0
        to_port = 0
        protocol = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
}

data "aws_ami" "ubuntu" {
    most_recent = true
    owners = ["099720109477"]
    filter {
        name = "name"
        values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
    }
}


resource "aws_instance" "app" {
    ami = data.aws_ami.ubuntu.id
    instance_type = var.instance_type
    key_name = aws_key_pair.deployer.key_name
    vpc_security_group_ids = [aws_security_group.web_sg.id]
    tags = { 
        Name = "mern-app-server" 
    }


    root_block_device {
        volume_size = 30
        volume_type = "gp3"
    }


    provisioner "local-exec" {
        command = "echo ${self.public_ip} > ../.terraform/app_public_ip.txt"
    }
}

