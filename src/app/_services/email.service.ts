import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { catchError, Observable } from 'rxjs';
// import { HandleError, HttpErrorHandler } from './http-error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  emailSenderServerURL = 'https://aiinfoxmailsendervercel.vercel.app/v1/send-email';
  // private handleError: HandleError;

  constructor(
    private http: HttpClient,
    // httpErrorHandler: HttpErrorHandler
  ) {
    // this.handleError = httpErrorHandler.createHandleError('SendEmailContactForm');
  }

  sendEmail_EJS(formData: any): Promise<EmailJSResponseStatus> {
    const serviceID = 'service_b2skfyq';
    const templateID = 'template_on9vsas';
    const userID = 'ZyWVESpmjkK3_x4ZL';

    return emailjs.send(serviceID, templateID, formData, userID);
  }

  sendEmail(formData: any): Observable<any> {
    const payload = {
      recipient: 'info@aiinfox.com', 
      subject: 'Emails Are Coming From AIINFOX Website', 
      text: `
        <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>AiINFOX Contact Email Template</title>
              <style>
                body {
                  font-family: 'Arial', sans-serif;
                  margin: 0;
                  padding: 0;
                  background: url('https://aiinfox.com/bg.d1d8b9f5a15c71f2.png') no-repeat center center/cover;
                  color: #333;
                }

                .email-container {
                  max-width: 750px;
                  margin: 20px auto;
                  background-color: #fffdf5;
                  border-radius: 10px;
                  overflow: hidden;
                  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
                }

                .header {
                  background-color: #fff;
                  color: #ff5d22;
                  padding: 20px;
                  text-align: center;
                  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }

                .header img {
                  width: 150px;
                  margin-bottom: 15px;
                }

                .header h1 {
                  margin: 0;
                  font-size: 28px;
                  letter-spacing: 1px;
                }

                .sub-header {
                  font-size: 18px;
                  color: #f9a825;
                  margin-top: 10px;
                }

                .content {
                  padding: 20px;
                }

                .section {
                  margin-top: 30px;
                }

                .section h2 {
                  color: #273246;
                  font-size: 24px;
                  margin-bottom: 20px;
                  border-bottom: 2px solid #f9a825;
                  display: inline-block;
                }

                .about-section p {
                  color: #666;
                  font-size: 16px;
                  line-height: 1.6;
                }

                .services-grid {
                }

                .service-card {
                  background-color: #fff;
                  padding: 15px;
                  margin: 10px;
                  border-radius: 8px;
                  text-align: center;
                  border: 1px solid #eee;
                  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }

                .service-card img {
                  width: 60px;
                  margin-bottom: 10px;
                }

                .service-card h3 {
                  color: #273246;
                  margin-bottom: 10px;
                  font-size: 18px;
                }

                .service-card p {
                  color: #666;
                  font-size: 14px;
                }

                .technologies-section img {
                  width: 50px;
                  margin: 10px;
                  background-color: #fff;
                  border: 1px solid #ddd;
                  padding: 40px;
                  border-radius: 5px;
                }

                .contact-info-section {
                  background-color: #fff;
                  border: 1px solid #eee;
                  padding: 20px;
                  border-radius: 6px;
                  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                }
                .contact-info-section table {
                  width: 100%;
                  border-collapse: collapse;
                  margin-top: 10px;
                }

                .contact-info-section th,
                .contact-info-section td {
                  padding: 12px;
                  text-align: left;
                  border-bottom: 1px solid #ddd;
                }

                .contact-info-section th {
                  background-color: #273246;
                  color: white;
                }

                .footer {
                  background-color: #fffaf2;
                  color: #000;
                  padding: 20px;
                  text-align: center;
                  font-size: 14px;
                }

                .footer img {
                  width: 100px;
                  margin-bottom: 10px;
                }

                .footer a {
                  color: #f9a825;
                  text-decoration: none;
                }

                @media (max-width: 768px) {
                  .services-grid {
                    flex-direction: column;
                  }
                  .service-card {
                      max-width: 100%;
                      height: 200px;
                  }
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <!-- Header -->
                <div class="header">
                  <img src="https://aiinfox.com/assets/img/logo.png" alt="AiINFOX Logo" />
                  <h1>Welcome to AiINFOX</h1>
                  <p class="sub-header">WHERE AI & INNOVATION COLLIDE</p>
                </div>

                <!-- About Us Section -->
                <div class="content">
                  <div class="section about-section">
                    <h2>About Us</h2>
                    <p>
                      At AiINFOX, we specialize in developing intelligent AI-powered
                      solutions that streamline business operations, enhance customer
                      engagement, and deliver cutting-edge innovation. Our expertise spans
                      various industries including HR, healthcare, automation, and
                      more, ensuring we deliver solutions tailored to your specific needs.
                    </p>
                  </div>

                  <!-- Our Services Section -->
                  <div class="section">
                    <h2>Our Services</h2>
                    <div class="services-grid">
                      <table>
                          <tr>
                              <td>
                                  <div class="service-card">
                                      <img src="https://aiinfox.com/assets/img/services/icon-pro4.jpg" alt="AI Chatbots" />
                                      <h3>AI Chatbots</h3>
                                      <p>
                                      Enhance your customer experience with AI-powered chatbot
                                      solutions that provide seamless communication and support.
                                      </p>
                                  </div>
                              </td>
                              <td>
                                  <div class="service-card">
                                      <img src="https://aiinfox.com/assets/img/services/icon-pro1.jpg" alt="HRMS Solutions" />
                                      <h3>HRMS Solutions</h3>
                                      <p>
                                        Comprehensive HR management systems designed to streamline
                                        employee engagement and optimize organizational workflows.
                                      </p>
                                    </div>
                              </td>
                          </tr>
                          <tr>

                          </tr>
                              <td>
                                  <div class="service-card">
                                      <img src="https://aiinfox.com/assets/img/courses/hms-main-banner.jpg" alt="AI in Healthcare" />
                                      <h3>AI in Healthcare</h3>
                                      <p>
                                      Cutting-edge AI solutions to improve healthcare outcomes by
                                      optimizing operations and decision-making processes.
                                      </p>
                                  </div>
                              </td>
                              <td>
                                  <div class="service-card">
                                      <img src="https://aiinfox.com/assets/img/services/img7.png" alt="Automation Tools" />
                                      <h3>Automation Tools</h3>
                                      <p>
                                        Boost productivity and efficiency with tailor-made automation
                                        solutions for your business processes.
                                      </p>
                                    </div>
                              </td>
                          </tr>
                      </table>
                    </div>
                  </div>

                  <!-- Solutions Section -->
                  <div class="section technologies-section">
                    <h2>Solutions</h2>
                    <div style="text-align: center;">
                      <img src="https://aiinfox.com/assets/img/services/data.png" alt="Data Science" />
                      <img src="https://aiinfox.com/assets/img/services/ai-brain.png" alt="Generative AI" />
                      <img src="https://aiinfox.com/assets/img/services/app-development.png" alt="Mobile App Development" />
                      <img src="https://aiinfox.com/assets/img/services/bullhorn.png" alt="Digital Marketing" />
                    </div>
                  </div>

                  <!-- Contact Form-->
                  <div class="section contact-info-section">
                    <h2>Contact Form</h2>
                    <table>
                      <tr>
                        <th>Name</th>
                        <td>${formData.name}</td>
                      </tr>
                      <tr>
                        <th>Email</th>
                        <td>${formData.email}</td>
                      </tr>
                      <tr>
                        <th>Website</th>
                        <td>AiINFOX Website</td>
                      </tr>
                      <tr>
                        <th>Message</th>
                        <td>${formData.message}</td>
                      </tr>
                      <tr>
                        <th>Phone Number</th>
                        <td>${formData.phoneNumber}</td>
                      </tr>
                    </table>
                  </div>
                </div>

                <!-- Footer -->
                <div class="footer">
                  <img src="https://aiinfox.com/assets/img/logo.png" alt="AiINFOX Logo" />
                  <p>&copy; 2024 AiINFOX. All Rights Reserved.</p>
                  <p><a href="https://aiinfox.com">Visit Our Website</a></p>
                </div>
              </div>
            </body>
          </html>
      `
    }
    return this.http.post<any[]>(this.emailSenderServerURL, payload)
      .pipe(
        // catchError(this.handleError('SendEmailContactForm', []))
      );
  }

}
