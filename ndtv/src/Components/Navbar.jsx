import { Box, Flex, Text, Button ,Stack, Image, Spacer} from "@chakra-ui/react"
import {useNavigate} from "react-router-dom";
function Navbar() {
    const navigate = useNavigate();
    return (
        <>
        <div>
        <Box w='100%' m='auto'  bg='#3e3e3e' h='80px'>
        <Box mr='100px' ml='100px'>
        <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='teal' variant='ghost'>NDTV</Button>
        <Button colorScheme='teal' variant='ghost'>हिंदी न्यूज़</Button>
        <Button colorScheme='teal' variant='ghost'>BUSINESS</Button>
        <Button colorScheme='teal' variant='ghost'>MOVIES</Button>
        <Button colorScheme='teal' variant='ghost'>CRICKET</Button>
        <Button colorScheme='teal' variant='ghost'>TECH</Button>
        <Button colorScheme='teal' variant='ghost'>FOOD</Button>
        <Button colorScheme='teal' variant='ghost'>CRYPTO</Button>
        <Button colorScheme='teal' variant='ghost'>WEB STORIES</Button>
        <Button colorScheme='teal' variant='ghost'>EDUCATION</Button>
        <Button colorScheme='teal' variant='ghost'>AUTO</Button>
        <Button colorScheme='teal' variant='ghost'>SWASTH</Button>
        <Button colorScheme='teal' variant='ghost'>LIFESTYLE</Button>
        <Button colorScheme='teal' variant='ghost'>HEALTH</Button>
        <Button colorScheme='teal' variant='ghost'>SHOPPING</Button>
        <Button colorScheme='teal' variant='ghost'>ART</Button>
        </Stack>
        </Box>

        <Box m='auto'  mr='120px' ml='120px'>
        <Flex gap='50px'>
        <Box w='100px'>
        <Image  src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NDTV_logo.svg/1280px-NDTV_logo.svg.png' />
        </Box>
         
        <Box>
        <Flex gap='30px'>
        <Button color='white' variant='link' onClick={()=>navigate("/")}>LIVE TV</Button> 
        <Button color='white' variant='link' onClick={()=>navigate("/")}>LATEST </Button>
        <Button color='white' variant='link' onClick={()=>navigate("/")}>COVID</Button>
        <Button color='white' variant='link'>INDIA</Button>
        <Button color='white' variant='link'>OPENION</Button>
        <Button color='white' variant='link'>VIDEO</Button>
        <Button color='white' variant='link'>CITIES</Button>
        <Button color='white' variant='link'>WORLD</Button>
        <Button color='white' variant='link'>CITIES</Button>
        <Button color='white' variant='link'>WORLD</Button>
        <Button color='white' variant='link'>OFFBEAT</Button>
        <Button color='white' variant='link'>TRENDS</Button>
        <Button color='white' variant='link'>PHOTOS</Button>
        </Flex>
        </Box>
        </Flex>
        </Box>
        </Box>
        </div>
        </>
    )
}
export default Navbar;
