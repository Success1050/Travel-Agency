import HeaderComponent from "@/components/HeaderComponent";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <section className='bg-gray-100'>
        <HeaderComponent>
          <h4 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            Contact Us
          </h4>
        </HeaderComponent>

        <div className='container mx-auto px-4 py-12'>
          <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
              <div className='flexItem'>
                <FaEnvelope className='text-blue-500 mr-2' />
                <p>giftnuelstravels@yahoo.com</p>
              </div>
              <div className='flexItem'>
                <FaPhone className='text-blue-500 mr-2' />
                <p>+2348128032967</p>
              </div>
              <div className='flexItem'>
                <FaMapMarkedAlt className='text-blue-500 mr-2' />
                <p>no1 Transcorp Hilton, Aguiyi Ironsi, Maitama, Abuja</p>
              </div>
            </div>
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
              <form action='#'>
                <div className='mb-4'>
                  <label className='block text-gray-700 mb-2' htmlFor='Name'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='w-full p-2 border border-gray-300 rounded'
                    name='Name'
                    placeholder='Enter name'
                  />
                </div>
                <div>
                  <label htmlFor='Email' className='block text-gray-700 mb-2'>
                    Email
                  </label>
                  <input
                    type='email'
                    name='Email'
                    className='w-full p-2 border border-gray-300 rounded'
                    placeholder='Enter Email'
                  />
                </div>
                <div>
                  <label htmlFor='Name' className='block text-gray-700 mb-2'>
                    Message
                  </label>
                  <textarea
                    name=''
                    id=''
                    placeholder='Write Message'
                    className='w-full p-2 border border-gray-300 rounded'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='py-2 px-4 bg-blue-500 text-white rounded'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
