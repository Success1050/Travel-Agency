import axios from "axios";

export async function getStaticProps() {
  try {
    const res = await axios("https://restcountries.com/v3.1/all");

    console.log(res);

    const countries = res.data;

    return {
      props: {
        countries,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
