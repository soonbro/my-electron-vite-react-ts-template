import {
  Accordion,
  AccordionItem,
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CircularProgress,
  Link,
  User,
  Image,
  Listbox,
  ListboxItem,
  cn,
  ListboxSection,
  useDisclosure,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Snippet,
  Spacer,
} from '@nextui-org/react'
import React from 'react'

const defaultContent = 'Accordion Content Test'

export const ListboxWrapper = ({ children }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
)

export const DeleteDocumentIcon = props => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z"
      fill="currentColor"
    />
    <path
      d="M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z"
      fill="currentColor"
      opacity={0.399}
    />
    <path
      clipRule="evenodd"
      d="M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

export const EditDocumentIcon = props => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M15.48 3H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V8.52C21 5.06 18.93 3 15.48 3Z"
      fill="currentColor"
      opacity={0.4}
    />
    <path
      d="M21.02 2.98c-1.79-1.8-3.54-1.84-5.38 0L14.51 4.1c-.1.1-.13.24-.09.37.7 2.45 2.66 4.41 5.11 5.11.03.01.08.01.11.01.1 0 .2-.04.27-.11l1.11-1.12c.91-.91 1.36-1.78 1.36-2.67 0-.9-.45-1.79-1.36-2.71ZM17.86 10.42c-.27-.13-.53-.26-.77-.41-.2-.12-.4-.25-.59-.39-.16-.1-.34-.25-.52-.4-.02-.01-.08-.06-.16-.14-.31-.25-.64-.59-.95-.96-.02-.02-.08-.08-.13-.17-.1-.11-.25-.3-.38-.51-.11-.14-.24-.34-.36-.55-.15-.25-.28-.5-.4-.76-.13-.28-.23-.54-.32-.79L7.9 10.72c-.35.35-.69 1.01-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61.33.33.78.5 1.28.5.11 0 .22-.01.33-.02l2.97-.42c.49-.07 1.15-.4 1.5-.76l5.38-5.38c-.25-.08-.5-.19-.78-.31Z"
      fill="currentColor"
    />
  </svg>
)
export const CopyDocumentIcon = props => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M15.5 13.15h-2.17c-1.78 0-3.23-1.44-3.23-3.23V7.75c0-.41-.33-.75-.75-.75H6.18C3.87 7 2 8.5 2 11.18v6.64C2 20.5 3.87 22 6.18 22h5.89c2.31 0 4.18-1.5 4.18-4.18V13.9c0-.42-.34-.75-.75-.75Z"
      fill="currentColor"
      opacity={0.4}
    />
    <path
      d="M17.82 2H11.93C9.67 2 7.84 3.44 7.76 6.01c.06 0 .11-.01.17-.01h5.89C16.13 6 18 7.5 18 10.18V16.83c0 .06-.01.11-.01.16 2.23-.07 4.01-1.55 4.01-4.16V6.18C22 3.5 20.13 2 17.82 2Z"
      fill="currentColor"
    />
    <path
      d="M11.98 7.15c-.31-.31-.84-.1-.84.33v2.62c0 1.1.93 2 2.07 2 .71.01 1.7.01 2.55.01.43 0 .65-.5.35-.8-1.09-1.09-3.03-3.04-4.13-4.16Z"
      fill="currentColor"
    />
  </svg>
)
export const AddNoteIcon = props => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M7.37 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H7.37A4.87 4.87 0 0 0 2.5 8.37v8.75c0 2.7 2.18 4.88 4.87 4.88Z"
      fill="currentColor"
      opacity={0.4}
    />
    <path
      d="M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM12 14.75h-1.69V13c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7c-.41 0-.75.34-.75.75s.34.75.75.75h1.81V18c0 .41.34.75.75.75s.75-.34.75-.75v-1.75H12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z"
      fill="currentColor"
    />
  </svg>
)

const App = () => {
  const [value, setValue] = React.useState(0)
  const iconClasses = 'text-xl text-default-500 pointer-events-none flex-shrink-0'

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue(v => (v >= 100 ? 0 : v + 5))
    }, 250)

    return () => clearInterval(interval)
  }, [])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = React.useState<'opaque' | 'blur' | 'transparent' | undefined>(
    'opaque',
  )
  const backdrops = ['opaque', 'blur', 'transparent']

  const handleOpen = backdrop => {
    setBackdrop(backdrop)
    onOpen()
  }

  return (
    <div id="app">
      Soonbro's NextUI (TailwindCSS) TEST Electron App
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex gap-4">
        <User
          name="Soonbro"
          description="Developer"
          avatarProps={{
            src: 'https://avatars.githubusercontent.com/u/37871515?v=4',
          }}
        />
        <User
          name="Soonbro"
          description="Front-End Beginner"
          avatarProps={{
            src: 'https://avatars.githubusercontent.com/u/37871515?v=4',
          }}
        />
      </div>
      <div className="bg-primary-800">
        <h3>
          I'm{' '}
          <Link
            href="https://github.com/soonbro"
            color="foreground"
            isExternal
            //target="_blank"
            //rel="noopener noreferrer"
            showAnchorIcon
          >
            Soonbro
          </Link>
        </h3>
        <h4>
          <Link href="https://www.electronjs.org/" target="_blank">
            Electron
          </Link>{' '}
          +{' '}
          <Link href="https://www.reactjs.org/" target="_blank">
            React
          </Link>{' '}
          +{' '}
          <Link href="https://www.typescriptlang.org/" target="_black">
            TypeScript
          </Link>
        </h4>
        <h5>
          {`use `}
          <Link target="_blank" href="https://electron-vite.org" rel="noopener noreferrer">
            electron-vite
          </Link>
        </h5>
        <Snippet variant="shadow" color="secondary">
          npm install @nextui-org/react
        </Snippet>
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
      <div className="flex gap-4">
        <Badge content="new" color="danger" size="sm">
          <Avatar
            isBordered
            radius="md"
            color="danger"
            src="https://i.pravatar.cc/300?u=a042581f4e29026709d"
          />
        </Badge>
        <CircularProgress
          aria-label="Loading..."
          size="lg"
          value={value}
          color="warning"
          showValueLabel={true}
        />
        <CircularProgress label="Loading..." />
      </div>
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
          subtitle="앱 개발 중"
          title="Soonbro"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Soonbro"
          startContent={
            <Avatar
              isBordered
              color="success"
              radius="lg"
              src="https://avatars.githubusercontent.com/u/37871515?v=4"
            />
          }
          subtitle="3 incompleted steps"
          title="Soonbro"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Soonbro"
          startContent={
            <Avatar
              isBordered
              color="danger"
              radius="lg"
              src="https://avatars.githubusercontent.com/u/37871515?v=4"
            />
          }
          subtitle={
            <p className="flex">
              2 issues to<p className="text-primary ml-1">fix now</p>
            </p>
          }
          title="Soonbro"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
      <br />
      <div className="flex flex-wrap gap-4 items-center">
        <Card className="w-[200px] h-[200px] bg-gradient-to-br from-red-500 to-primary-500">
          <CardBody className="justify-center items-center py-0">
            <CircularProgress
              classNames={{
                svg: 'w-36 h-36 drop-shadow-md',
                indicator: 'stroke-white',
                track: 'stroke-white/10',
                value: 'text-3xl font-semibold text-white',
              }}
              value={35}
              strokeWidth={4}
              showValueLabel={true}
            />
          </CardBody>
        </Card>
        <Image
          isBlurred
          width={240}
          src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
          alt="NextUI Album Cover"
          className="m-5"
        />
        <Image
          isZoomed
          width={300}
          alt="NextUI Fruit Image with Zoom"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </div>
      <ListboxWrapper>
        <Listbox variant="flat" aria-label="Listbox menu with sections">
          <ListboxSection title="Actions" showDivider>
            <ListboxItem
              key="new"
              description="Create a new file"
              startContent={<AddNoteIcon className={iconClasses} />}
            >
              New file
            </ListboxItem>
            <ListboxItem
              key="copy"
              description="Copy the file link"
              startContent={<CopyDocumentIcon className={iconClasses} />}
            >
              Copy link
            </ListboxItem>
            <ListboxItem
              key="edit"
              description="Allows you to edit the file"
              startContent={<EditDocumentIcon className={iconClasses} />}
            >
              Edit file
            </ListboxItem>
          </ListboxSection>
          <ListboxSection title="Danger zone">
            <ListboxItem
              key="delete"
              className="text-danger"
              color="danger"
              description="Permanently delete the file"
              startContent={<DeleteDocumentIcon className={cn(iconClasses, 'text-danger')} />}
            >
              Delete file
            </ListboxItem>
          </ListboxSection>
        </Listbox>
      </ListboxWrapper>
      <div className="flex">
        <div className="flex flex-wrap gap-3">
          {backdrops.map(b => (
            <Button
              key={b}
              variant="flat"
              color="warning"
              onPress={() => handleOpen(b)}
              className="capitalize"
            >
              {b}
            </Button>
          ))}
        </div>
        <Modal backdrop={backdrop} isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {onClose => (
              <>
                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                <ModalBody>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
                    non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
                    porttitor quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus
                    non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
                    porttitor quam.
                  </p>
                  <p>
                    Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                    dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit
                    duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit
                    incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
                    et. Culpa deserunt nostrud ad veniam.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        <Spacer x={4} />
        <Select className="max-w-xs" label="Select country">
          <SelectItem
            key="argentina"
            startContent={
              <Avatar alt="Argentina" className="w-6 h-6" src="https://flagcdn.com/ar.svg" />
            }
          >
            Argentina
          </SelectItem>
          <SelectItem
            key="venezuela"
            startContent={
              <Avatar alt="Venezuela" className="w-6 h-6" src="https://flagcdn.com/ve.svg" />
            }
          >
            Venezuela
          </SelectItem>
          <SelectItem
            key="brazil"
            startContent={
              <Avatar alt="Brazil" className="w-6 h-6" src="https://flagcdn.com/br.svg" />
            }
          >
            Brazil
          </SelectItem>
          <SelectItem
            key="switzerland"
            startContent={
              <Avatar alt="Switzerland" className="w-6 h-6" src="https://flagcdn.com/ch.svg" />
            }
          >
            Switzerland
          </SelectItem>
          <SelectItem
            key="germany"
            startContent={
              <Avatar alt="Germany" className="w-6 h-6" src="https://flagcdn.com/de.svg" />
            }
          >
            Germany
          </SelectItem>
          <SelectItem
            key="spain"
            startContent={
              <Avatar alt="Spain" className="w-6 h-6" src="https://flagcdn.com/es.svg" />
            }
          >
            Spain
          </SelectItem>
          <SelectItem
            key="france"
            startContent={
              <Avatar alt="France" className="w-6 h-6" src="https://flagcdn.com/fr.svg" />
            }
          >
            France
          </SelectItem>
          <SelectItem
            key="italy"
            startContent={
              <Avatar alt="Italy" className="w-6 h-6" src="https://flagcdn.com/it.svg" />
            }
          >
            Italy
          </SelectItem>
          <SelectItem
            key="mexico"
            startContent={
              <Avatar alt="Mexico" className="w-6 h-6" src="https://flagcdn.com/mx.svg" />
            }
          >
            Mexico
          </SelectItem>
        </Select>
      </div>
    </div>
  )
}

export default App
