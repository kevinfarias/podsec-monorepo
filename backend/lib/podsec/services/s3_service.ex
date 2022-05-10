defmodule Podsec.S3Service do
    alias ExAws.S3

    def upload(fileObject, folderTo) do
        fileName = "#{folderTo}#{fileObject.filename}"
        bucketName = Application.fetch_env!(:ex_aws, :bucket_name)
        fileBinary = File.read!(fileObject.path)
        returnFromAWS = S3.put_object(bucketName, fileName, fileBinary) |> ExAws.request!()
        %{ status_code: 200 } = returnFromAWS

        fileName
    end

    def get(fileWithPath) do
        bucketName = Application.fetch_env!(:ex_aws, :bucket_name)
        defaultRegion = Application.fetch_env!(:ex_aws, :region)
        "https://#{bucketName}.s3.#{defaultRegion}.amazonaws.com/#{fileWithPath}"
    end

    def delete(fileWithPath) do
        bucketName = Application.fetch_env!(:ex_aws, :bucket_name)
        returnFromAWS = S3.delete_object(bucketName, fileWithPath) |> ExAws.request!()
        %{ status_code: 204 } = returnFromAWS
    end
end
