import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <button className="bg-blue-300 px-4 py-2 rounded-md">Button</button>
      <br />
      <Button>Click me - default</Button>
      <br />
      <Button variant={'destructive'} size={'sm'}>
        Click me - destructive, sm
      </Button>
      <br />
      <Button variant={'outline'} size={'lg'}>
        Click me - outline, lg
      </Button>
      <br />
      <Button variant={'default'} size={'icon'}>
        ICON
      </Button>
    </div>
  )
}
