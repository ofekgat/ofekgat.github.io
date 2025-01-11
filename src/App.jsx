import React, { useState, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Grid,
  CssBaseline,
  TextField,
  Stack,
} from "@mui/material";



import { createTheme, ThemeProvider } from '@mui/material';
const theme = createTheme({
  typography: {
    fontFamily: 'Varela Round',
  },
    palette: {
      primary: {
        main: "#E4D4EB",
      },
      text: {
        primary: "#4A4A4A",
        secondary: "#9E9E9E",
      },
  },});

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const processRef = useRef(null);
  const parentsRef = useRef(null);
  const contactRef = useRef(null);

  const [formData, setFormData] = useState({
    message: "",
    name: "",
    phone: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log("Form Data Submitted:", formData);
  };

  const resetForm = () => {
    setFormData({
      message: "",
      name: "",
      phone: "",
      email: "",
    });
    setIsSubmitted(false);
  };

  
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline
  enableColorScheme
  sx={{
    fontFamily: "'Varela Round', serif",
  }}/>

      {/* Root Full Page Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          width: "100vw", // Full width
          overflowX: "hidden", // Prevent horizontal scrolling
          margin: 0,
          padding: 0,
        }}
      >
        {/* Navbar */}
        <AppBar
          className="sticky-navbar"
          color="transparent"
          elevation={4}
          sx={{
            px: { xs: 2, md: 6 },
            width: "100vw",
            boxShadow: "0px 4px 10px rgba(169, 134, 152, 0.15)",
            backgroundColor: "white"
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            {/* Left-aligned Contact Button */}
            <Button
              variant="contained"
              sx={{
                boxShadow: "none",
                borderColor: "#E4D4EB",
                color: "text.primary",
                fontWeight: "bold",
                "&:hover": {
                  boxShadow: "none",
                  borderColor: "none",
                    backgroundColor:"#D6C4DF", 
                  },
                  "&:focus": {
                    boxShadow: "none",
                    outline: "none",
                    borderColor: "#D6C4DF",
                  },
              }}
              onClick={() => {
                contactRef.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              יצירת קשר
            </Button>

            {/* Center-aligned Menu */}
            <Box sx={{ display: "flex", gap: 4 }}>
              <Button color="inherit" 
              variant="text"
              sx={{ color: "text.primary" ,
                "&:hover": {
                    backgroundColor:"rgb(255, 246, 251)", 
                  },
                  "&:focus": {
                    outline: "none",
                  },
              }}
              onClick={() => {
                parentsRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              >
                הורים מספרים
              </Button>
              <Button
               color="inherit" 
              variant="text"

              sx={{ color: "text.primary",
                "&:hover": {
                    backgroundColor:"rgb(255, 246, 251)", 
                  },
                "&:focus": {
                    outline: "none",
                  },
               }}
              onClick={() => {
                processRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              >
                תהליך הייעוץ
              </Button>
              <Button
                color="inherit"
                variant="text"
                sx={{ color: "text.primary" ,
                  "&:hover": {
                    backgroundColor:"rgb(255, 246, 251)", 
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
                onClick={() => {
                  aboutRef.current.scrollIntoView({ behavior: "smooth" });
                }}
              >
                קצת עליי
              </Button>
                  <Button
                color="inherit"
                variant="text"
                sx={{ 
                  color: "text.primary",

                  "&:hover": {
                    backgroundColor:"rgb(255, 246, 251)", 
                  },
                  "&:focus": {
                    outline: "none",
                  },
                }}
                onClick={() => {
                  homeRef.current.scrollIntoView({ behavior: "smooth" });
                }}
    >
      בית
    </Button>
            </Box>

            {/* Right-aligned Logo/Title */}
            <Box sx={{ display: "flex", gap: 3 }}>
            <Box sx={{ textAlign: "right" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "text.primary" }}
              >
                סמדר גת
              </Typography>
              <Typography variant="body2" sx={{color: "text.secondary" }}>
                מדריכת הורים
              </Typography>
            </Box>

            <Box sx={{ display: "flex", marginTop: "5px"}}>
              <img src="leaf.svg" alt="Custom Icon" width="42" height="42" />
            </Box>
            </Box>

          </Toolbar>
        </AppBar>

        {/* Push content down */}
        <Toolbar />

         {/* Hero Section */}

          
         <Box
  ref={homeRef}
  sx={{
    display: "flex",
    flexDirection: "row", // Align items in a row
    justifyContent: "space-between", // Space between the image and text
    alignItems: "center", // Align items vertically
    height: "50vh", // Full height
    width: "100vw", // Full width
    background: "linear-gradient(180deg, #F8EDED, #FFFFFF)",
    px: 2,
    m: 0,
  }}
>
  {/* Left: Image */}
  <img 
    src="mom-pic.jpeg" 
    alt="Custom Icon" 
    style={{ 
      width: "20%", 
      height: "auto",
      marginLeft: "120px",
      borderRadius: "10px",
      maxWidth: "400px"
    }} 
  />

  {/* Right: Text */}
  <Box
    sx={{
      textAlign: "right", // Align text to the right
    }}
  >
    <Typography
      variant="h3"
      sx={{
        marginRight: "70px",
        color: "text.primary",
        fontWeight: "bold",
        fontSize: { xs: "2rem", md: "3rem" },
      }}
    >
      הדרכת הורים<br /> וייעוץ משפחתי
    </Typography>
    <Typography
      variant="h6"
      sx={{
        marginRight: "70px",
        color: "text.secondary",
        mt: 2,
      }}
    >
      תהליך ייעוץ וליווי מלא להורים ולזוגות
    </Typography>
  </Box>
</Box>

        {/* About Section */}
        <Box
          ref={aboutRef}
          sx={{
            py: 8,
            px: 4,
            width: "100vw", // Full width
            textAlign: "right", // Align text to the right
            m: 0,
          }}
        >
          <Typography variant="h4" sx={{ marginRight: "60px"}} gutterBottom>
            קצת עליי
          </Typography>
          <Typography variant="body1" sx={{ marginRight: "60px"}} paragraph>
          .נעים להכיר, אני סמדר גת – מדריכת הורים, נשואה ואמא לשני בנים, אופק ושחר<br/>
          ,במשך 20 שנה עבדתי במשרד החינוך כמורה למתמטיקה ומחנכת. למרות הנטייה שלי לעולם המספרים<br/>
          .בחרתי לעזוב את ההוראה ולהתמחות בתחום החינוך הרחב, תוך התמקדות בהכוונה מקצועית להורים <br/><br/>
          ,ההורות היא מסע מאתגר, אך גם מעשיר שמאפשר צמיחה ושיפור הדדי עם הילדים. במהלך השנים <br/>
          .עבדתי עם מאות הורים וילדים במגוון מסגרות חינוכיות – בתי ספר תיכוניים, חטיבות ביניים ובתי ספר יסודיים<br/><br/>
          אני מכירה את הקשיים שמלווים כל גיל ושלב בהתפתחות הילד, ומביאה עימי כלים וגישות טיפוליות מותאמות<br/>
           לכל משפחה.

          אני כאן כדי להעניק לך את המשאבים, הידע והעקרונות שיסייעו לך לבנות קשר חזק ובריא עם <br/>
          .ילדיך, להתמודד עם אתגרי היום-יום וליצור בבית אווירה של תמיכה, הבנה ושיתוף פעולה
          </Typography>
        </Box>

        <Box
  sx={{
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    minHeight: "60vh", // Full height of the viewport
    px: 4,
    m: 0,
  }}
>
  {/* Content Box */}
  <Box
    ref={processRef}
    sx={{
      textAlign: "right",
    minHeight: "30vh",
    mb: 20,
    }}>
  </Box>
  <Box
    sx={{
      textAlign: "right", // Align text to the right
      minHeight: "30vh",
      width: { xs: "90%", sm: "70%", md: "50%" }, // Responsive width
    }}
  >
    
    <Typography variant="h4" gutterBottom>
      תהליך הייעוץ
    </Typography>
    <Typography variant="body1" paragraph>
      ? כמה זמן נמשכת פגישה <br />
       .פגישה ראשונה בדרך כלל ארוכה יותר והיא בין שעה לשעה וחצי  <br />
       .הפגישות הבאות, הן בנות שעה אחת
       </Typography>

    <Typography variant="body1" paragraph>
      ? כמה זמן נמשך התהליך <br />
      ,הוא אישי ומותאם לכל משפחה. יש כאלו שיגיעו ליעד שנקבע מראש <br />
      .בשניים-שלושה מפגשים, ויהיו כאלה שיצטרכו יותר

      
          </Typography>

    <Typography variant="body1" paragraph>
      ? היכן מתקיימים המפגשים  <br />
      .המפגשים מתקיימים בקליניקה בהוד השרון או בזום
          </Typography>
  </Box>
</Box>
        {/* Testimonials Section */}
        <Box
          ref={parentsRef}
          sx={{
            py: 8,
            px: 4,
            width: "100vw", // Full width
            textAlign: "right", // Align text to the right
            minHeight: "50vh",

            m: 0,
          }}
        >
          <Typography variant="h4" sx={{ marginRight: "60px"}} gutterBottom>
            הורים מספרים
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" paragraph>
            
              .דוד ב<br />
              ״סמדר יקרה, תודה ענקית על התמיכה באביתר. העזרה והפתרונות<br />
              .היצירתיים שלך לקשיים שהיו לו פשוט מעוררי הערצה <br />
             רואים שאת עובדת מהלב, פתחת לי ערוץ אחר לקשר שלי איתו.״<br /><br /><br /><br /><br />

              .שרית ד <br />
            ,״תודה על הייעוץ וההכוונה שהיו משמעותיים במיוחד בתקופת הקורונה <br />
             .בה אמיר היה מבודד מהחברים בכיתה, והם התראו רק בזום<br />
            ,הצלחנו לשמור בבית על אווירה תומכת וגבולות, בתוך כל הכאוס שהיה<br />
               כך שהוא הצליח לחזור למסגרת בצורה הכי טובה שיכולה הייתה להיות.״<br />


              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="body1" sx={{ marginRight: "60px"}}paragraph>
            
                .מאשה ט <br />
                ״אין לי מילים לתאר את מה שאני מרגישה. מילדה שהייתה<br />
               בחרם החל מכיתה א׳, נתת לי כלים להתמודד מול ההורים<br />
               של הילדים בכיתה, כיצד להתנהל עם הבת שלי ובזכותך היא <br />
               קיבלה ממני עצות להעצמה. הבטחון העצמי שלה גדל , היא <br />
               שמחה להגיע לבית הספר, יש לה חברות. היחסים בבית השתנו<br />
               פלאים ומילדה מגוננת מדי, היא בעלת תחושת מסוגלות .״<br /><br />


              .מיכל כ <br />
              ״סמדר אהובה, תודה על כל העזרה ברגעים הקשים, על <br />
              התמיכה והייעוץ המתמיד, שאין לי ספק שיהיו משמעותיים גם <br />
              בעתיד. תודה על ההקשבה, הנתינה וטוב ליבך. ברגישותך<br />
              וחוכמתך לקחת נער בגיל ההתבגרות, עם כל המורכבות שיש <br />
              .בו, והפכת אותו מ “סלע בזלת” ליהלום <br />
              הקשר ביננו לאסף השתנה לטובה, תודות לך.״<br />


              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box
              sx={{
                display: "flex",
                minHeight: "60vh",
                flexDirection: { xs: "column"},

                justifyContent: "center",
                alignItems: "center",
                px: 4,
                py: 6,
                backgroundColor: "#ffffff",
                height: "auto",
              }}
            >
              {/* Left Section: סוגי ייעוץ והדרכה */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: { xs: "100%", md: "40%" },
                  minHeight: "40vh",
                }}
              >
                <Typography variant="h4" sx={{ mb: 4, color: "#4A4A4A" }}>
                  סוגי ייעוץ והדרכה
                </Typography>
                <Stack spacing={2} sx={{width: "130%", height: "auto",}}>
                  <Button
                    variant="contained"
                    disabled
                    sx={{
                      "&.Mui-disabled": {
                      backgroundColor: "#E4D4EB70",
                      color: "text.primary",
                       fontSize: "18px"
                      },
                    }}
                  >
                    הדרכה וליווי הורים לילדים בכל הכלים
                  </Button>
                  <Button
                    variant="contained"
                    disabled
                    sx={{
                      "&.Mui-disabled": {
                      backgroundColor: "#E4D4EB70",
                      color: "text.primary",
                       fontSize: "18px"
                      },
                    }}
                  >
                    ייעוץ משפחתי
                  </Button>
                  <Button
                    variant="contained"
                    disabled
                    sx={{
                      "&.Mui-disabled": {
                      backgroundColor: "#E4D4EB70",
                      color: "text.primary",
                       fontSize: "18px"
                      },
                    }}
                  >
                    הרצאות לצוותי חינוך וחברות פרטיות
                  </Button>
                </Stack>
                

              </Box>
        
              {/* Right Section: בואו נדבר */}
<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    alignItems: "flex-end",
    minHeight: "40vh",
    width: { xs: "100%" },
    mb: 44,
  }}
>
  {/* Title */}

  <Typography
    variant="h4"
    sx={{ mb: 2, color: "#4A4A4A", marginRight: "60px" }}
  >
    בואו נדבר
  </Typography>

  {/* Description */}
  <Typography
    variant="body1"
    sx={{ mb: 2, color: "#9E9E9E", marginRight: "60px" }}
    dir="rtl"
  >
    לקביעת פגישה, לשיחת היכרות, לייעוץ נקודתי או לקבלת מידע נוסף<br />
    אתם מוזמנים ליצור איתי קשר ואשמח להכיר אתכם.
  </Typography>

  <Typography
    variant="body1"
    sx={{ mb: 4, color: "text.primary", marginRight: "60px" }}
    dir="rtl"
  >
    054-2660054
    <br/>
    gat.smadar@gmail.com
  </Typography>

  {isSubmitted ? (
  <Typography
    variant="h6"
    color="primary"
    sx={{ mt: 4, textAlign: "right", marginRight: "60px" }}
  >
    תודה! ההודעה נשלחה.
  </Typography>
) : (
  <Box component="form" onSubmit={handleSubmit}>
    {/* Form Fields */}
  </Box>
)}

  {/* Contact Form */}
  <Box
    ref={contactRef}
    component="form"
    onSubmit={handleSubmit}
    sx={{
      alignItems: "right",
      width: "90%", // Controls the width of the form
      marginRight: "60px", // Adjusts the right alignment
      textAlign: "right",
      
    }}
  >

    {/* Name and Phone Fields */}
    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
    <TextField label="טלפון" variant="outlined" fullWidth />
      <TextField label="שם" dir="rtl" variant="outlined" fullWidth />
      
    </Stack>

    {/* Email Field */}
    <TextField
      label="כתובת דואר אלקטרוני (לא חובה)"
      variant="outlined"
      fullWidth
      sx={{ mb: 2 }}
    />
    {/* Message Field */}
    <TextField
      label="הודעה"
      multiline
      rows={4}
      fullWidth
      variant="outlined"
      sx={{ mb: 2 }}
      dir="rtl"
    />

    {/* Submit Button */}
    <Button
      variant="contained"
      fullWidth
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#E4D4EB",
        "&:hover": {
          boxShadow: "none",
          backgroundColor: "#D6C4DF",
        },
        "&:focus": {
                    boxShadow: "none",
                    outline: "none",
                    borderColor: "#D6C4DF",
        },
        color: "#4A4A4A", // Ensure text color matches design
        boxShadow: "none",
        fontWeight: "bold",
        height: "50px", // Adjust button height
        fontSize: "16px", // Adjust text size
      }}
    >
      שליחה
    </Button>
    
  </Box>
</Box>
            </Box>
      </Box>

    </ThemeProvider>
    
  );
}

export default App;