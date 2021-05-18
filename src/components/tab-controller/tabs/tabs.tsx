import React, { ReactNode } from "react";
import { AppState } from "../../../app-context";
import { StyledContent, StyledForm } from "./tabs.style";
import Faker from "faker";
export const Content = (props: AppState): ReactNode => {
  Faker.seed(props.selectedTab);
  return (
    <StyledContent>
      <h2>{props.name && "Hello " + props.name + ","}</h2>
      <h3>Here's some lorem ipsum to liven up your day! Enjoy</h3>
      <hr />
      <div>
        <span>{Faker.lorem.paragraphs(4)}</span>
        <img src={Faker.image.nightlife()} alt="" className="left" />
        <span>{Faker.lorem.paragraphs(3)}</span>
        <span>{Faker.lorem.paragraphs(2)}</span>
        <span>{Faker.lorem.paragraphs(5)}</span>
      </div>
      <hr />
      <div>
        <img src={Faker.image.food()} alt="" className="right" />
        <span>{Faker.lorem.paragraphs(5)}</span>
        <span>{Faker.lorem.paragraphs(3)}</span>
      </div>
    </StyledContent>
  );
};

export const Form = (props: AppState): ReactNode => {
  Faker.seed(props.selectedTab);
  return (
    <StyledForm>
      <form>
        <label>First Name</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />

        <label>Last Name</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />

        <label>Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>

        <label>Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
      <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone" />
            <input type="url" placeholder="Website" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <input type="submit" value="Send Message" />
      </form>
    </StyledForm>
  );
};

export const Table = (props: AppState): ReactNode => {
  Faker.seed(props.selectedTab);
  return <h3>Table Test</h3>;
};

export const Icons = (props: AppState): ReactNode => {
  Faker.seed(props.selectedTab);
  return <h3>Icons Test</h3>;
};

export const Video = (props: AppState): ReactNode => {
  Faker.seed(props.selectedTab);
  return <h3>Video Test</h3>;
};

export const Grid = (props: AppState): ReactNode => {
  Faker.seed(props.selectedTab);
  return <h3>Grid Test</h3>;
};
