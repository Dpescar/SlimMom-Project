import React from 'react';
import CaloriesCalc from 'components/CaloriesCalc/CaloriesCalc';
import Container from 'components/Container/Container';
function Home() {
  return (
    <div className={`background mainBackground `}>
      <section className="top-bottom">
        <Container className="left-right">
          <CaloriesCalc />
          {}
          {}
        </Container>
      </section>
      <div className="footer-margin"></div>
    </div>
  );
}

export default Home;
