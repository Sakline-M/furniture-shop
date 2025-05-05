import React from 'react'

const Map = () => {
  return (
    <div className="w-full h-[250px] mt-4">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.896128161202!2d-74.00594108459113!3d40.71277597933156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19b7cfb6b1%3A0xf3c4a6e0bb7a8820!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1633801686467!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map