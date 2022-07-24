import { Flex,Text, Box, Image , Input} from "@chakra-ui/react";

function Footer() {
    return (
        <div>
        <Box  w='100%' m='auto' mt='50px' bg='#eaeaea' p='20px'>
        <Flex gap='60px'>
        <Box ml='120px'>
        <Box w='120px' mb='40px'>
        <Image  src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/NDTV_logo.svg/1280px-NDTV_logo.svg.png' />
        </Box>
        <Text mr='50px'fontSize='sm'>FOLLOW US ON</Text>
        <Flex mb='20px'>
        <Image w='30px' h='30px' src='https://icon-library.com/images/fb-icon/fb-icon-16.jpg' />
        <Image w='30px' h='30px' src='https://cdn-icons-png.flaticon.com/512/733/733635.png' />
        <Image w='30px' h='30px' src='https://thephotonnews.com/wp-content/uploads/2022/03/koo-icon-black.svg' />
        <Image w='30px' h='30px' src='https://thumbs.dreamstime.com/b/rounded-black-white-linkedin-logo-icon-high-resolution-vector-eps-file-175792458.jpg' />
        </Flex>
        <Input placeholder='SEARCH'  size='sm' />
        </Box>
        <Box >
        <Flex gap='20px' mb='20px'>
         
         <div>ABOUT US</div>
         <div>ADVERTISE</div>
         <div>EPG SERVICES</div>
         <div>CAREERS</div>
         <div>CHANNELS</div>
         <div>DISCLAIMER</div>
         <div>FEEDBACK</div>
         <div>INVESTORS</div>
         <div>REDRESSALS</div>
         <div>SERVICE TERMS</div>
         <div>ARCHIVES</div>
         
         </Flex>
         <hr/>
         <Flex gap='20px' mb='20px' ml='60px'>
         
         <div>NDTV GROUP SITES </div>
         <div>NEWS</div>
         <div>BUSINESS</div>
         <div>HINDI</div>
         <div>MOVIES</div>
         <div>CRICKET</div>
         <div>FOOD</div>
         <div>TECH</div>
         <div>AUTO</div>
         <div>TRAINS</div>
         <div>ARTS</div>
         
         </Flex>
         <hr/>
         <Flex gap='20px' ml='60px'>
         
         <div>THIS WEBSITE FOLLOWS THE DNPA CODE OF ETHICS  |</div>
         <div> COPYRIGHT NDTV CONVERGENCE LIMITED 2022. ALL RIGHTS</div>
         
         
         </Flex>
        </Box>
        </Flex>
        </Box>
        </div>
    )
}
export default Footer;