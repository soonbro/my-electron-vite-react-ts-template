import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Card,
  CardBody,
  CircularProgress,
} from '@nextui-org/react'

const defaultContent = ''

const App = () => {
  return (
    <div id="app">
      NextUI (TailwindCSS) TEST
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <br />
      <div>
        <h3>
          I'm{' '}
          <a target="_blank" href="https://github.com/soonbro" rel="noopener noreferrer">
            Soonbro
          </a>
        </h3>
        <h4>
          <a href="https://www.electronjs.org/" target="_blank">
            Electron
          </a>{' '}
          +{' '}
          <a href="https://www.reactjs.org/" target="_blank">
            React
          </a>{' '}
          +{' '}
          <a href="https://www.typescriptlang.org/" target="_black">
            TypeScript
          </a>
        </h4>
        <h5>
          {`use `}
          <a target="_blank" href="https://electron-vite.org" rel="noopener noreferrer">
            electron-vite
          </a>
        </h5>
      </div>
      <div className="p-6 max-w-sm mx-auto bg-primary-200 rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="resources/icon.png" alt="Electron Logo"></img>
        </div>
        <div>
          <div className="text-xl font-medium text-black">Electron</div>
          <p className="text-slate-500">Hello Electron World!</p>
        </div>
      </div>
      <br />
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>
      <div className="bg-primary max-w p-5 m-5">
        <Button
          disableRipple
          className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
          size="lg"
        >
          Custom Button
        </Button>
      </div>
      <br />
      <Card className="w-[200px] h-[200px] bg-gradient-to-br from-red-500 to-primary-500">
        <CardBody className="justify-center items-center py-0">
          <CircularProgress
            classNames={{
              svg: 'w-36 h-36 drop-shadow-md',
              indicator: 'stroke-white',
              track: 'stroke-white/10',
              value: 'text-3xl font-semibold text-white',
            }}
            value={70}
            strokeWidth={4}
            showValueLabel={true}
          />
        </CardBody>
      </Card>
      <br />
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Soonbro"
          startContent={
            <Avatar
              isBordered
              color="primary"
              radius="lg"
              src="https://avatars.githubusercontent.com/u/37871515?v=4"
            />
          }
          subtitle="4 unread messages"
          title="Chung Miller"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Janelle Lenard"
          startContent={
            <Avatar
              isBordered
              color="success"
              radius="lg"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          }
          subtitle="3 incompleted steps"
          title="Janelle Lenard"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Zoey Lang"
          startContent={
            <Avatar
              isBordered
              color="warning"
              radius="lg"
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            />
          }
          subtitle={
            <p className="flex">
              2 issues to<p className="text-primary ml-1">fix now</p>
            </p>
          }
          title="Zoey Lang"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default App
