import React, { useState } from 'react';
import { UserPlus, Shield, CheckCircle, AlertCircle } from 'lucide-react';

interface StudentRegistrationPageProps {
  isHighContrast: boolean;
}

interface FormData {
  studentName: string;
  parentName: string;
  parentBio: string;
  educationalBackground: string;
  age: string;
  visualImpairmentType: string;
  assistiveTechExperience: string;
  preferredLanguage: string;
  contactEmail: string;
  contactPhone: string;
  state: string;
  city: string;
  learningGoals: string;
  additionalNeeds: string;
  consentDataUsage: boolean;
  consentCommunication: boolean;
}

export default function StudentRegistrationPage({ isHighContrast }: StudentRegistrationPageProps) {
  const [formData, setFormData] = useState<FormData>({
    studentName: '',
    parentName: '',
    parentBio: '',
    educationalBackground: '',
    age: '',
    visualImpairmentType: '',
    assistiveTechExperience: '',
    preferredLanguage: 'English',
    contactEmail: '',
    contactPhone: '',
    state: '',
    city: '',
    learningGoals: '',
    additionalNeeds: '',
    consentDataUsage: false,
    consentCommunication: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu and Kashmir', 'Ladakh'
  ];

  const languages = [
    'English', 'Hindi', 'Tamil', 'Bengali', 'Marathi', 'Telugu', 'Gujarati', 'Kannada',
    'Malayalam', 'Odia', 'Punjabi', 'Assamese', 'Urdu', 'Sanskrit'
  ];

  const visualImpairmentTypes = [
    'Complete Blindness', 'Low Vision', 'Cortical Visual Impairment', 'Albinism',
    'Glaucoma', 'Diabetic Retinopathy', 'Macular Degeneration', 'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.studentName.trim()) newErrors.studentName = 'Student name is required';
    if (!formData.parentName.trim()) newErrors.parentName = 'Parent/Guardian name is required';
    if (!formData.parentBio.trim()) newErrors.parentBio = 'Parent/Guardian bio is required';
    if (!formData.educationalBackground.trim()) newErrors.educationalBackground = 'Educational background is required';
    if (!formData.age.trim()) newErrors.age = 'Age is required';
    if (!formData.visualImpairmentType) newErrors.visualImpairmentType = 'Visual impairment type is required';
    if (!formData.contactEmail.trim()) newErrors.contactEmail = 'Email is required';
    if (!formData.contactPhone.trim()) newErrors.contactPhone = 'Phone number is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.consentDataUsage) newErrors.consentDataUsage = 'Data usage consent is required';
    if (!formData.consentCommunication) newErrors.consentCommunication = 'Communication consent is required';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.contactEmail && !emailRegex.test(formData.contactEmail)) {
      newErrors.contactEmail = 'Please enter a valid email address';
    }

    // Phone validation (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (formData.contactPhone && !phoneRegex.test(formData.contactPhone.replace(/\D/g, ''))) {
      newErrors.contactPhone = 'Please enter a valid 10-digit Indian phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`pt-16 min-h-screen ${isHighContrast ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center p-12 rounded-2xl ${
            isHighContrast ? 'bg-gray-900 border-2 border-yellow-400' : 'bg-white shadow-xl'
          }`}>
            <CheckCircle className={`h-16 w-16 mx-auto mb-6 ${
              isHighContrast ? 'text-yellow-400' : 'text-green-600'
            }`} />
            <h1 className={`text-3xl font-bold mb-4 ${
              isHighContrast ? 'text-white' : 'text-gray-900'
            }`}>
              Registration Successful!
            </h1>
            <p className={`text-lg mb-6 ${
              isHighContrast ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Thank you for registering with Divya Drishti. Our team will review your application 
              and contact you within 2-3 business days to discuss the next steps.
            </p>
            <p className={`text-sm ${
              isHighContrast ? 'text-gray-400' : 'text-gray-500'
            }`}>
              You will receive a confirmation email shortly at {formData.contactEmail}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`pt-16 min-h-screen ${isHighContrast ? 'bg-black' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            isHighContrast 
              ? 'bg-yellow-400 text-black' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            <UserPlus className="h-4 w-4 mr-2" />
            Student Registration
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isHighContrast ? 'text-white' : 'text-gray-900'
          }`}>
            Join the{' '}
            <span className={isHighContrast ? 'text-yellow-400' : 'text-blue-600'}>
              Divya Drishti Community
            </span>
          </h1>
          
          <p className={`text-xl max-w-3xl mx-auto ${
            isHighContrast ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Begin your journey towards accessible, AI-powered education. 
            Fill out this form to get personalized learning support.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`p-8 rounded-2xl ${
          isHighContrast ? 'bg-gray-900 border-2 border-yellow-400' : 'bg-white shadow-xl'
        }`}>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Student Information */}
            <div className="md:col-span-2">
              <h2 className={`text-2xl font-bold mb-6 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                Student Information
              </h2>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Student's Full Name *
              </label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.studentName
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Enter student's full name"
              />
              {errors.studentName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.studentName}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Age *
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                min="5"
                max="25"
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.age
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Enter age"
              />
              {errors.age && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.age}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Type of Visual Impairment *
              </label>
              <select
                name="visualImpairmentType"
                value={formData.visualImpairmentType}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.visualImpairmentType
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
              >
                <option value="">Select type</option>
                {visualImpairmentTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.visualImpairmentType && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.visualImpairmentType}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Preferred Learning Language *
              </label>
              <select
                name="preferredLanguage"
                value={formData.preferredLanguage}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  isHighContrast 
                    ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
              >
                {languages.map((lang) => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Previous Educational Background *
              </label>
              <textarea
                name="educationalBackground"
                value={formData.educationalBackground}
                onChange={handleInputChange}
                rows={3}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.educationalBackground
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Describe the student's educational history, last grade completed, any special education experience, specific learning needs, etc."
              />
              {errors.educationalBackground && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.educationalBackground}
                </p>
              )}
            </div>

            {/* Parent/Guardian Information */}
            <div className="md:col-span-2 mt-8">
              <h2 className={`text-2xl font-bold mb-6 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                Parent/Guardian Information
              </h2>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Parent/Guardian's Full Name *
              </label>
              <input
                type="text"
                name="parentName"
                value={formData.parentName}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.parentName
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Enter parent/guardian's full name"
              />
              {errors.parentName && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.parentName}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Contact Email *
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.contactEmail
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Enter email address"
              />
              {errors.contactEmail && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.contactEmail}
                </p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Parent/Guardian's Brief Bio *
              </label>
              <textarea
                name="parentBio"
                value={formData.parentBio}
                onChange={handleInputChange}
                rows={3}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.parentBio
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Please share your occupation, background, any relevant experience with assistive technology or special education, and how you support your child's learning"
              />
              {errors.parentBio && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.parentBio}
                </p>
              )}
            </div>

            {/* Contact & Location */}
            <div className="md:col-span-2 mt-8">
              <h2 className={`text-2xl font-bold mb-6 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                Contact & Location
              </h2>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Phone Number *
              </label>
              <input
                type="tel"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.contactPhone
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Enter 10-digit phone number"
              />
              {errors.contactPhone && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.contactPhone}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                State *
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.state
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
              >
                <option value="">Select state</option>
                {indianStates.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
              {errors.state && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.state}
                </p>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                City *
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  errors.city
                    ? 'border-red-500'
                    : isHighContrast 
                      ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Enter city name"
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-1" />
                  {errors.city}
                </p>
              )}
            </div>

            {/* Additional Information */}
            <div className="md:col-span-2 mt-8">
              <h2 className={`text-2xl font-bold mb-6 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                Learning Preferences
              </h2>
            </div>

            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Experience with Assistive Technology
              </label>
              <textarea
                name="assistiveTechExperience"
                value={formData.assistiveTechExperience}
                onChange={handleInputChange}
                rows={2}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  isHighContrast 
                    ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Describe any experience with screen readers, Braille displays, voice software, or other assistive technologies"
              />
            </div>

            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Learning Goals & Interests
              </label>
              <textarea
                name="learningGoals"
                value={formData.learningGoals}
                onChange={handleInputChange}
                rows={3}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  isHighContrast 
                    ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="What subjects or skills would you like to focus on? Any specific career interests or academic goals?"
              />
            </div>

            <div className="md:col-span-2">
              <label className={`block text-sm font-medium mb-2 ${
                isHighContrast ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Additional Support Needs
              </label>
              <textarea
                name="additionalNeeds"
                value={formData.additionalNeeds}
                onChange={handleInputChange}
                rows={2}
                className={`w-full p-3 rounded-lg border-2 transition-colors ${
                  isHighContrast 
                    ? 'bg-black border-yellow-400 text-white focus:border-yellow-300' 
                    : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                }`}
                placeholder="Any other disabilities, learning differences, or specific accommodations needed?"
              />
            </div>

            {/* Privacy & Consent */}
            <div className="md:col-span-2 mt-8">
              <h2 className={`text-2xl font-bold mb-6 ${
                isHighContrast ? 'text-white' : 'text-gray-900'
              }`}>
                Privacy & Consent
              </h2>
              
              <div className={`p-6 rounded-lg mb-6 ${
                isHighContrast ? 'bg-black border border-yellow-400' : 'bg-blue-50 border border-blue-200'
              }`}>
                <div className="flex items-start space-x-3">
                  <Shield className={`h-6 w-6 mt-1 ${
                    isHighContrast ? 'text-yellow-400' : 'text-blue-600'
                  }`} />
                  <div>
                    <h3 className={`font-semibold mb-2 ${
                      isHighContrast ? 'text-white' : 'text-gray-900'
                    }`}>
                      Data Privacy Statement
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      isHighContrast ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Your information will be used solely for personalized learning and support through the Divya Drishti platform. 
                      We adhere to strict ethical AI and data privacy guidelines. Your data will never be shared with third parties 
                      without explicit consent, and you can request data deletion at any time. We use industry-standard encryption 
                      and security measures to protect your information.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consentDataUsage"
                    name="consentDataUsage"
                    checked={formData.consentDataUsage}
                    onChange={handleInputChange}
                    className={`mt-1 h-5 w-5 rounded border-2 ${
                      isHighContrast 
                        ? 'border-yellow-400 text-yellow-400 focus:ring-yellow-400' 
                        : 'border-blue-600 text-blue-600 focus:ring-blue-500'
                    }`}
                  />
                  <label htmlFor="consentDataUsage" className={`text-sm ${
                    isHighContrast ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    I consent to the collection and use of this information for personalized learning support and 
                    platform improvement. I understand my rights regarding data privacy and deletion. *
                  </label>
                </div>
                {errors.consentDataUsage && (
                  <p className="text-red-500 text-sm flex items-center ml-8">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.consentDataUsage}
                  </p>
                )}

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="consentCommunication"
                    name="consentCommunication"
                    checked={formData.consentCommunication}
                    onChange={handleInputChange}
                    className={`mt-1 h-5 w-5 rounded border-2 ${
                      isHighContrast 
                        ? 'border-yellow-400 text-yellow-400 focus:ring-yellow-400' 
                        : 'border-blue-600 text-blue-600 focus:ring-blue-500'
                    }`}
                  />
                  <label htmlFor="consentCommunication" className={`text-sm ${
                    isHighContrast ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    I consent to receive communications from Divya Drishti regarding learning progress, 
                    platform updates, and educational opportunities. *
                  </label>
                </div>
                {errors.consentCommunication && (
                  <p className="text-red-500 text-sm flex items-center ml-8">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {errors.consentCommunication}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-8">
              <button
                type="submit"
                className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  isHighContrast 
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Submit Registration
              </button>
              
              <p className={`text-center text-sm mt-4 ${
                isHighContrast ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Our team will review your application and contact you within 2-3 business days.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}