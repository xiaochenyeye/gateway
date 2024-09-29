import { Description, Field, Fieldset, Input, Label, Legend } from '@headlessui/react'
import clsx from 'clsx'
import Botton from '../components/Botton/lightBorderBtn'
const Login = () => {

    return <div className="w-screen h-screen bg-black flex justify-center items-center">
        <div className="w-full max-w-lg px-4">
      <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
        <Legend className="text-base/7 font-semibold text-white">网关系统</Legend>
        <Field>
          <Label className="text-sm/6 font-medium text-white">用户名</Label>
          <Input
            className={clsx(
              'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
          />
        </Field>
        <Field>
          <Label className="text-sm/6 font-medium text-white">密码</Label>
          <Description className="text-sm/6 text-white/50">默认用户名密码admin/admin123</Description>
          <Input
            className={clsx(
              'mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
            )}
          />
        </Field>
        <Field>
            <Botton />
        </Field>
      </Fieldset>
    </div>
    </div>
}

export default Login