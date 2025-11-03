variable "aws_region" {
    description = "AWS region"
    type = string
    default = "us-east-1"
}


variable "instance_type" {
    description = "EC2 instance type"
    type = string
    default = "t3.small"
}


variable "ssh_key_name" {
    description = "Name for the AWS key pair"
    type = string
}


variable "ssh_public_key_path" {
    description = "Path to public key file"
    type = string
}


variable "admin_ip_cidr" {
    description = "CIDR for admin SSH access"
    type = string
    default = "0.0.0.0/0"
}