import React from 'react';

const Features = () => {
  const features = [
    { title: "Certified Courses", description: "Get certified in the most demanded skills." },
    { title: "Expert Mentors", description: "Learn from industry professionals." },
    { title: "Job Assistance", description: "Access job opportunities with our support." },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
