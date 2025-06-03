import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // EmailJS credentials
  const SERVICE_ID = "service_zp58l69";
  const TEMPLATE_ID = "template_y5u07cu";
  const PUBLIC_KEY = "7zfB57-6Nzk2tZT9i";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
        .then((result) => {
          console.log(result.text);
          toast({
            title: "Message Sent!",
            description: "Thank you for your message. I'll get back to you soon.",
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          if (form.current) {
            form.current.reset(); // Reset the form element itself
          }
        }, (error) => {
          console.log(error.text);
          toast({
            title: "Error Sending Message",
            description: "Something went wrong. Please try again later.",
            variant: "destructive",
          });
        });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7860834282",
      href: "tel:+917860834282"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sainishivpoojan1@gmail.com",
      href: "mailto:sainishivpoojan1@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lucknow, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next AI project? Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <info.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">{info.label}</p>
                      {info.href !== "#" ? (
                        <a
                          href={info.href}
                          className="text-lg text-gray-900 hover:text-purple-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg text-gray-900">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Profiles</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/shivpoojan-saini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors"
                >
                  <span className="text-blue-600 font-semibold">LinkedIn</span>
                </a>
                <a
                  href="https://medium.com/@sainishivpoojan1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <span className="text-gray-600 font-semibold">Medium</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name" // This 'name' attribute is crucial for EmailJS
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email" // This 'name' attribute is crucial for EmailJS
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject" // This 'name' attribute is crucial for EmailJS
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project collaboration, consultation, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message" // This 'name' attribute is crucial for EmailJS
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;