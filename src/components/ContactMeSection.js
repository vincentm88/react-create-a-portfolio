import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  const [isOpen, setIsOpen] = React.useState(false);





  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      enquirytype: '',
      comment: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      enquirytype: Yup.string(!"").required('Required'),
      comment: Yup.string().required('Required'),
    }),
    onSubmit:async (values, {resetForm}) => {
      submit('/api/contact', values);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    formik.handleSubmit(e);
  }


  useEffect(() => {
    if (response) {
      if (response.type === 'success') {
        onOpen('success', response.message);
        formik.resetForm();
      } else if (response.type === 'error') {
        onOpen('error', response.message);
      }
    }
  }, [response]);

  

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                />
                <FormErrorMessage>{ formik.errors.firstName }</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="enquirytype">Type of enquiry</FormLabel>
                <Select 
                  id="enquirytype" 
                  name="enquirytype"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.enquirytype}                
                >
                <option value="" disabled style={{ color: 'black' }}>Select an Option</option>
                  <option value="hireMe" style={{ color: 'black' }}>Freelance project proposal</option>
                  <option value="openSource" style={{ color: 'black' }} >
                    Open source consultancy session
                  </option>
                  <option value="other" style={{ color: 'black' }}>Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.enquirytype}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.comment}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
