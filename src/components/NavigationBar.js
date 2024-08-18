import React from 'react';

function NavigationBar() {
  return (
    <div style={{ width: 393, height: 79, paddingTop: 4, background: 'white', borderTop: '0.50px rgba(0, 0, 0, 0.10) solid', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '80%' }}>
        <div style={{ width: 34, height: 34, background: '#E8EAED', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img style={{ width: 18, height: 17.64 }} src="https://via.placeholder.com/18x18" alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
