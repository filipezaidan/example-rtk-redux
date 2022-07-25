import { Flex, Text, Spinner, Stack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useGetUsersQuery } from './services/UserApi'

const App = () => {
  const toast = useToast()
  const { data, error, isLoading } = useGetUsersQuery()

  return (
    <Stack w="100vw" h="100vh" py={6}>
      <Stack
        direction="column"
        alignItems="center"
        h="100%"
        spacing={10}
        w="100%"
      >
        <Text fontWeight={500} fontSize="3xl">
          Example RTK Redux
        </Text>
        {isLoading && <Spinner size="lg" />}
        {error &&
          toast({
            title: 'Error',
            description: 'API failed',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'top-right',
          })}
        {data && (
          <Flex
            w="80%"
            h={5}
            borderRadius={4}
            minH={600}
            flexDirection="column"
            bgColor="#f0f0f0"
            p={4}
          >
            {data.map((user, key) => (
              <Flex w="100%" h={20}>
                <Text fontSize="lg" fontWeight={500} key={key}>
                  {user.name}
                </Text>
              </Flex>
            ))}
          </Flex>
        )}
      </Stack>
    </Stack>
  )
}

export default App
