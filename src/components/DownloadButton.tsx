import type {FunctionComponent} from 'react'
import {Button} from 'antd'
import {DownloadOutlined} from '@ant-design/icons'

interface DownloadButtonProps {
  fileName: string
  fileUrl: string
  buttonText: string
}

const DownloadButton: FunctionComponent<DownloadButtonProps> = ({fileName, fileUrl, buttonText}) => {
  return (
    <Button type="primary" icon={<DownloadOutlined />} href={fileUrl} download={fileName}>
      {buttonText}
    </Button>
  )
}

export default DownloadButton
