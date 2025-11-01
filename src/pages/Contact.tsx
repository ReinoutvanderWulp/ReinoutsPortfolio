import type {FunctionComponent} from 'react'
import type { FormProps} from 'antd';
import  { Typography} from 'antd';
import {Button, Form, Input} from 'antd'
import {ContactInfo} from '@/interfaces/ContactInfo.ts'

const {TextArea} = Input
const {Paragraph, Title} = Typography

type FieldType = {
  naam?: string;
  email?: string;
  telefoon?: string;
  content?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const contactInfo: ContactInfo[] = [
  {
    label: ""
  }
]

const Contact: FunctionComponent = () => {
  return (
    <div>
      <Typography>
        <Title level={4}>
          Contact
        </Title>
        <Paragraph>
          Ik kom graag met u in contact! U kunt mij contacteren via onderstaand formulier, of gebruik maken van de hieronder
          vermelde contactgegevens.
        </Paragraph>
      </Typography>
      <div>
      </div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Naam"
          name="naam"
          rules={[{ required: true, message: 'Gelieve uw naam in te vullen!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Gelieve uw email in te vullen!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Telefoon"
          name="telefoon"
          rules={[{required: true, message: 'Gelieve uw telefoon nummer in te vullen!'}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item<FieldType>
          label="Content"
          name="content"
          rules={[{required: false}]}
        >
          <TextArea rows={4}/>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Verzenden
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Contact