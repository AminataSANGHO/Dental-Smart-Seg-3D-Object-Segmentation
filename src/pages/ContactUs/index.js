
import { useRef } from "react";
// @mui material components
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

//  examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "DefaultFooter";

// emailJS
import emailjs from "emailjs-com";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Image
import bgImage from "assets/images/contact-bg.png";

function ContactUs() {
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_io9etx8",
        "template_5mcmkeu",
        form.current,
        "mRlcztrYAzCGohzUj"
      )
      .then(
        (result) => {
          console.log("Message sent successfully:", result.text);
          alert('Thank you for submiting your requests. We will contact you back soon');
        },
        (error) => {
          console.error("Error sending message:", error.text);
        }
      );
  };

  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%">
        <DefaultNavbar
          routes={routes}
          // transparent
          light
        />
      </MKBox>
      <Grid container spacing={3} alignItems="center" 
      style={{
        background: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)',
        paddingTop:'7rem',
      }}>
        <Grid item xs={12} lg={6}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})`,
                  backgroundRepeat: "no-repeat", }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={10}
          md={7}
          lg={6}
          xl={4}
          ml={{ xs: "auto", lg: 6 }}
          mr={{ xs: "auto", lg: 6 }}
        >
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              // bgColor="#30062C"
              sx={{
                background: 'linear-gradient(to bottom, #30062C 0%, #30069f 50%, #30062C 100%)'}}
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
              
            >
              <MKTypography variant="h3" color="white" >
                Contact us
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              <MKTypography variant="body2" color="text" mb={3}>
                For further questions or Informations requests,contact us using our contact form.
              </MKTypography>
              {/* <MKBox width="100%" component="form" method="post" autoComplete="off"> */}
              <form ref={form} id="myForm"
                    onSubmit={(e) => {
                      e.preventDefault(); // Empêche le comportement par défaut du formulaire
                      sendEmail(e); // Appelle la fonction sendEmail avec l'événement e
                    }}
                    method="post"
                    autoComplete="off"
                  >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Full Name"
                      name="from_name"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      name="email_id"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <MKInput
                      variant="standard"
                      label="What can we help you?"
                      name="message"
                      placeholder="Describe your problem in at least 250 characters"
                      InputLabelProps={{ shrink: true }}
                      multiline
                      fullWidth
                      rows={6}
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2} >
                  <MKButton type="submit" variant="gradient" color="dark" >
                    Send Message
                  </MKButton>
                </Grid>
                </form>
              {/* </MKBox> */}
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>

      <MKBox pt={0} px={1}  sx={{ background: "rgba(0, 0, 0)" }}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default ContactUs;
