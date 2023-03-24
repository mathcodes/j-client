import React from 'react'

const Contact = () => {
  const handleAddressClick = (event) => {
    event.preventDefault()
    window.open(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.198834268258!2d-122.4241093848279!3d37.781805176442255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e6f9d702c9d%3A0x7ad4f2184b2e79d0!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1650400803928!5m2!1sen!2sus',
      '_blank'
    )
  }

  return (
    <div className="px-4 mx-auto mt-12 text-xl max-w-7xl sm:px-6 lg:px-8">
      <div className="md:flex md:items-start md:justify-between">
        <div className="mb-8 ">
          <h2 className="text-4xl font-bold leading-7 text-gray-900 sm:text-4xl sm:truncate sm:tracking-tight">
            Contact Information
          </h2>
          <div className="mt-6">
            <div className="flex">
              <span className="w-1/3 text-gray-700">Name:</span>
              <span className="ml-2 text-gray-900">John Doe</span>
            </div>
            <div className="flex mt-4">
              <span className="w-1/3 text-gray-700">Address:</span>
              <a href="#" className="ml-2 text-blue-500 hover:text-blue-600" onClick={handleAddressClick}>
                123 Main St, Anytown USA
              </a>
            </div>
            <div className="flex mt-4">
              <span className="w-1/3 text-gray-700">Phone:</span>
              <a href="tel:+15555555555" className="ml-2 text-blue-500 hover:text-blue-600">
                (555) 555-5555
              </a>
            </div>
            <div className="flex mt-4">
              <span className="w-1/3 text-gray-700">Email:</span>
              <a href="mailto:john.doe@example.com" className="ml-2 text-blue-500 hover:text-blue-600">
                john.doe@example.com
              </a>
            </div>
          </div>
        </div>
        {/* <div className="md:w-1/2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="absolute inset-0 w-full h-full"
              title="Google Maps Location"
              src="about:blank"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Contact
