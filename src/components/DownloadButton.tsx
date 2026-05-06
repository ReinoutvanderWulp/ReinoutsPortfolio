import type {CSSProperties, FunctionComponent} from 'react'
import {Button} from 'antd'
import {DownloadOutlined} from '@ant-design/icons'

interface DownloadButtonProps {
  fileName: string
  fileUrl: string
  buttonText: string
}

const buttonStyle: CSSProperties = {
  borderRadius: 10,
  fontWeight: 600,
}

const DownloadButton: FunctionComponent<DownloadButtonProps> = ({fileName, fileUrl, buttonText}) => (
  <Button type="primary" icon={<DownloadOutlined />} href={fileUrl} download={fileName} style={buttonStyle}>
    {buttonText}
  </Button>
)

export default DownloadButton
