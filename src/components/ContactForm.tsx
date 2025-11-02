import type {FunctionComponent} from 'react'
import {Button, Form, type FormProps, Input} from 'antd'

const {TextArea} = Input

type FieldType = {
  naam?: string
  email?: string
  telefoon?: string
  vragen?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = values => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
  console.log('Failed:', errorInfo)
}

const ContactForm: FunctionComponent = () => {
  return (
    <Form
      name="contactForm"
      layout="vertical"
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      style={{maxWidth: 600}}
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off">
      <Form.Item<FieldType>
        label="Naam"
        name="naam"
        rules={[{required: true, message: 'Gelieve uw naam in te vullen!'}]}>
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Email"
        name="email"
        rules={[{required: true, message: 'Gelieve uw email in te vullen!'}]}>
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label="Telefoon"
        name="telefoon"
        rules={[{required: true, message: 'Gelieve uw telefoon nummer in te vullen!'}]}>
        <Input />
      </Form.Item>

      <Form.Item<FieldType> label="Vragen" name="vragen" rules={[{required: false}]}>
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Verzenden
        </Button>
      </Form.Item>
    </Form>
  )
}

export default ContactForm
