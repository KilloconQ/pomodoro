import { useEffect, useState } from 'react'
import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'
// import { text } from '../es.json'
import './App.css'

function App() {
  const initialTime = 25 * 60
  const [count, setCount] = useState(initialTime)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let timerId

    if (running && count > 0) {
      timerId = setInterval(() => {
        setCount((prevCount) => prevCount - 1)
      }, 1000)
    }

    return () => {
      clearInterval(timerId)
    }
  }, [running, count])

  const handleStart = () => {
    setRunning(true)
  }

  const handleStop = () => {
    setRunning(false)
  }
  
  const handleReset = () => {
    setCount(initialTime)
    setRunning(false)
  }

  return (
    <>
      <Box textAlign="center" pt={8}>
        <Heading as="h1" size="x1">
          Contador
        </Heading>
        <Text fontSize="9xl" fontWeight="bold" my="30">
          {Math.floor(count / 60)}:{(count % 60).toString().padStart(2, '0')}
        </Text>
        <Flex direction="column">
          {running ? (
            <Button colorScheme='red' onClick={handleStop}>Detener</Button>
          ) : (
            <Button colorScheme='green' onClick={handleStart}>Iniciar</Button>
          )}
          <Button mt="5" colorScheme='gray' onClick={handleReset}>Reiniciar</Button>
        </Flex>
      </Box>
    </>
  )
}

export default App
