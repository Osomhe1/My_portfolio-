import React,{useRef, useState} from  'react'
import {Box, Text,  Input, Textarea, Button, Grid, GridItem, Link} from '@chakra-ui/react';
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'
import { createBreakpoints } from '@chakra-ui/theme-tools'


export default function Contact() {

  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
   
    const form = useRef('')

    const colSpan = createBreakpoints({ base: 2, md: 1 });
    // const colTextSpan = createBreakpoints({ base: 700, md: 700 });
    const marSpan = createBreakpoints({base: 4, sm:'auto', md: 'auto'});

    const width = createBreakpoints({base: 420, md: '700px'})

    // const isValidEmail = email => {
    // const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return regex.test(String(email).toLowerCase());
    // };

    const handleOnSubmit = (e) => {
    e.preventDefault();
      
          
    

    if (name && email && message) {
      
       // TODO - send mail
       const USER_ID = 'user_PYtrbLX3ex6sI6B2pe0Uj';
       const SERVICE_ID ='service_jor5ytq';
       const TEMPLATE_ID = 'template_aqvlx8r'
            // const templateParams= {
            //     name,
            //     email,
            //     message
            // };

            
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    .then(
      (result) => {
        console.log('SUCCESS!!!', result.status, result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      }
    )
    setName('');
        setEmail('');
        setMessage('');



        //     }
        //     else if(email !== isValidEmail){
        //     alert("email is invalid.")
        //     Swal.fire({
        //   icon: 'error',
        //   title: 'Ooops, something went wrong',
        //   // text: error.text,
        // })
        
          }
             else {
        alert('Please fill in all fields.');
    }




  };



    return (
      <Box>
        <Box alignItems='center' justifyContent='center' m={marSpan} maxW={width}>
          <Text
            textAlign='center'
            fontWeight={700}
            fontSize={30}
            color='#4b5ebe'
          >
            Get in touch
          </Text>
          <Text textAlign='center' fontWeight={500} fontSize={20} w={width}>
            Have a Job or Project for me, or just want to say hi? Feel free to
            email me at  <br /> 
            <Link href='mailto:osomhe.aleogho@gmail.com'>
              osomhe.aleogho@gmail.com <br />
            </Link> 
            or use the form below.
          </Text>
          <Box alignItems='center' justifyContent='center' m={marSpan}>
            <form 
            id="contact-form"
            ref={form} 
            onSubmit={(e) => handleOnSubmit(e)}
            >
              <Grid
              // colSpan={colSpan}
                templateColumns='repeat(2, 1fr)'
                //   alignItems='center'
                //   justifyContent='center'
                  // m='auto'
                // w={750}
              >
                <GridItem m={marSpan} colSpan={colSpan}>
                  <Input
                     onChange={e => setName(e.target.value)}
                    value={name}
                    placeholder='Your full name'
                    required
                    size='lg'
                    name='name'
                    mb={2}
                    mt={2}
                    // w={350}
                    
                  />
                </GridItem>
                <GridItem  m={marSpan} colSpan={colSpan}  >
                  <Input
                     onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder='Your email'
                    required
                    size='lg'
                    name='email'
                    // w={350}
                    mb={5}
                    mt={5}
                  />
                </GridItem>
                </Grid>
                <Grid templateColumns='repeat(1, 1fr)'>
              
              <GridItem w={width} m={marSpan} colSpan={colSpan}  mt='5'>
                <Textarea
                  // w={450}
                  h={200}
                  size='lg'
                   onChange={e => setMessage(e.target.value)}
                  value={message}
                  placeholder='Type your message'
                  name='message'
                />
              </GridItem >
              </Grid>
              <Box>
              </Box>
              <Box m='4'>
                <Button
                  type='submit'
                  bg='#4b5ebe'
                  color='#fff'
                  textTransform='uppercase'
                  value='send'
                >
                  send message
                </Button>

                
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    )
}
