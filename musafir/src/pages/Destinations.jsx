import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Destinations = () => {
  const { id } = useParams();
  const [places, setPlaces] = useState([]);
  const [heading, setHeading] = useState("");
  const [subhead, setSubHead] = useState("");
  const getData = async () => {
    let response = await axios.get(`http://localhost:8080/destinations/${id}`);

    return response.data;
  };
  useEffect(() => {
    getData().then((res) => {
      setPlaces(res.places);
      setHeading(res.heading);
      setSubHead(res.subheading);
    });
  }, []);
  console.log(places);
  return (
    <div
      style={{
        backgroundColor: "#212122",
      }}
    >
      <div
        style={{
          width: "80%",
          margin: "auto",
          color: "white",
          padding: "10px",
        }}
      >
        <h1>{heading}</h1>
        <h3>{subhead}</h3>
      </div>
      <div
        style={{
          backgroundColor: "#121212",
          padding: "20px",
        }}
      >
        <Grid
          container
          spacing={2}
          columns={18}
          sx={{
            width: "90%",
            margin: "auto",
            gap: "25px",
            justifyContent: "center",
          }}
        >
          {places.map((el) => (
            <Grid
              xs={5}
              key={el.id}
              sx={{
                padding: "20px",
                backgroundColor: "#212122",
                borderRadius: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: "white",
                  margin: "auto",
                }}
              >
                <img
                  src={el.image}
                  style={{
                    display: "block",
                    alignSelf: "center",
                    width: "100%",
                    maxHeight: "228px",
                    objectFit: "cover",
                    verticalAlign: "top",
                    borderTopRightRadius: "25px",
                    borderTopLeftRadius: "25px",
                    overflow: "hidden",
                  }}
                  alt=""
                />
                <h2>{el.id}</h2>
                <p>{el.subtitle}</p>
                <p>{el.about}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{ backgroundColor: "#121212", padding: "20px" }}>
        <div
          style={{
            width: "75%",
            margin: "auto",
            padding: "25px",
            backgroundColor: "#212122",
            color: "white",
            borderRadius: "25px",
          }}
        >
          <h1>
            Choose from our list of holiday ideas and appease your wanderlust!
          </h1>
          <p>
            Vacations are meant to make memories! And a well-planned itinerary
            makes for the vacation of a lifetime. Choose from a variety of
            destinations including picturesque mountains, vibrant valleys,
            majestic monuments, gorgeous cities and adventurous trails.
          </p>
          <p>
            Holidays to these exclusive destinations are available at a
            preferred budget, ranging from Rs. 10,000 to 50,000, including both
            pocket-friendly as well as uber-luxurious options. Not only will
            these holidays fit your budget, they will also cater to all your
            travel needs.
          </p>
          <p>
            Eager for a mountain holiday? Our scenic mountain destinations offer
            mesmerising views of snowclad mountains and offer trips to unique
            tourist points.
          </p>
          <p>
            Want to go on a trek? Try the ones here with beautiful views of
            lofty mountains and winding paths that take you through rugged
            valleys and forests. The delicious local cuisine and extraordinary
            accommodation inside the woods is, of course, the cherry on the
            cake.
          </p>
          <p>
            Choose an adventure heavy trip, best suited for those craving an
            adrenaline rush, and try your hand at offbeat activities like
            camping, scuba diving, rafting, kayaking, parasailing, sky diving,
            bungee jumping and more.
          </p>
          <p>
            Planning your honeymoon or want to on a romantic break? We have
            curated wonderful vacation experiences where you and your partner
            can celebrate your love!
          </p>
          <p>
            Beach destinations offer excellent accommodations with outstanding
            views, mouth-watering cuisines, thrilling water activities and of
            course, a lazy beach bed to chill in.
          </p>
          <p>
            If you are a heritage enthusiast or have a spiritual bent of mind,
            then you will love the unique heritage and pilgrimage destinations
            on our list. Food connoisseurs can take a literal trip down renowned
            food lanes and binge on exotic cuisines.
          </p>
          <p>
            So, what are you waiting for? Explore these fantastic holiday ideas
            and plan your next voyage.
          </p>
        </div>
      </div>
      <div style={{ backgroundColor: "#121212", padding: "20px" }}>
        <div
          style={{
            width: "75%",
            margin: "auto",
            padding: "25px",
            backgroundColor: "#212122",
            color: "white",
            borderRadius: "25px",
          }}
        >
          <h1>FAQs - Frequently Asked Questions</h1>
          <Accordion
            sx={{
              backgroundColor: "#212122",
              color: "white",
              borderBottom: "1px solid grey",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                What kind of destinations can I choose for travelling?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can choose any destination for travel as per your mood. For
                an action-packed holiday, you can choose wildlife, trekking and
                other adventurous destinations. For a romantic holiday with your
                special someone, you can choose from a range of couple-friendly
                destinations. You can also choose the kind of holiday you want
                based on the destination you like—whether hills, mountains,
                beaches, heritage or pilgrimage sites.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#212122",
              color: "white",
              borderBottom: "1px solid grey",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Can I opt for a budget-friendly holiday?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Yes, you can. All you have to do is set an approximate
                expenditure amount in your mind before starting exploring the
                ideas here. You can search for a suitable destination for your
                travel in any range from Rs. 10,000 to Rs. 50,000. It is
                advisable to make all the bookings in advance in order to avoid
                change in prices.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#212122",
              color: "white",
              borderBottom: "1px solid grey",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                Which time of the year is best suited for booking a holiday?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Holidays can be booked throughout the year. You only need to
                select the month in which you are planning to travel. Our
                curated list of ideas is designed in such a way that you will be
                able to see only those destinations which are most suitable for
                that particular month of the year. If you select a combination
                of filters defining your month, budget and purpose of travel,
                you will get the appropriate destination name and other details.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#212122",
              color: "white",
              borderBottom: "1px solid grey",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#7caff6" }} />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>What all will I get in a holiday idea?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Once you choose a destination, it will give you complete details
                of all the unique things about that place that must not be
                missed, including most visited local sites, best places to stay
                and all the memorable experiences that you can indulge in. You
                will be given multiple options of hotels, resorts and guest
                houses to choose from depending on your budget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
