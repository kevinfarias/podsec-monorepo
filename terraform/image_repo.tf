resource "aws_ecr_repository" "container-repository" {
  name                 = "${var.prefix}-container-registry"
  image_tag_mutability = "IMMUTABLE"
}

resource "aws_ecr_repository_policy" "container-repo-policy" {
  repository = aws_ecr_repository.container-repository.name
  policy     = <<EOF
  {
    "Version": "2008-10-17",
    "Statement": [
      {
        "Sid": "adds full ecr access to the teinformatech repository",
        "Effect": "Allow",
        "Principal": "*",
        "Action": [
          "ecr:BatchCheckLayerAvailability",
          "ecr:BatchGetImage",
          "ecr:CompleteLayerUpload",
          "ecr:GetDownloadUrlForLayer",
          "ecr:GetLifecyclePolicy",
          "ecr:InitiateLayerUpload",
          "ecr:PutImage",
          "ecr:UploadLayerPart"
        ]
      }
    ]
  }
  EOF
}