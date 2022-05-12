terraform {
    required_version = ">=0.13.1"
    required_providers {
        aws = ">=3.54.0"
        local = ">=2.1.0"
    }
    backend "s3" {
      bucket = "teinformatech-tf-bucket"
      key = "deployment.tfstate"
      region = "us-east-1"
    }
}

provider "aws" {
    region = "us-east-1"
}

module "new-vpc" {
  source = "./modules/vpc"
  prefix = var.prefix
}

module "eks" {
  source = "./modules/eks"
  vpc_id = module.new-vpc.vpc_id
  prefix = var.prefix
  cluster_name = var.cluster_name
  retention_days = var.retention_days
  subnet_ids = module.new-vpc.subnet_ids
  desired_size = var.desired_size
  max_size = var.max_size
  min_size = var.min_size
}