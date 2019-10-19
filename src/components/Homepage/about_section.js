import React from 'react';

const AboutSection = () => (
  <section className="bg-light" id="about">
    <div className="container center-text">
      <h2 className="title">About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa.
      </p>

      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
        quis, sem.
      </p>

      <p>
        Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet
        a, venenatis vitae, justo.
      </p>

      <p>
        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
        dapibus.
      </p>
      <div className="center-text">
        <button type="button" className="primary">
          Contact Me
        </button>
      </div>
    </div>
  </section>
);

export default AboutSection;
