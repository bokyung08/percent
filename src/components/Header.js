import React from 'react';

function Header() {
  return (
    <div style={{ width: 393, height: 43, paddingTop: 4, paddingBottom: 9, paddingLeft: 10, paddingRight: 10, borderBottom: '0.50px rgba(0, 0, 0, 0.10) solid', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: '#E7EAED', borderRadius: 100, display: 'flex', alignItems: 'center' }}>
        <div style={{ color: 'black', fontSize: 16, fontFamily: 'ABeeZee', fontWeight: '400', marginRight: 10 }}>docent_ai.com</div>
        <div style={{ width: 14, height: 18 }}>
          <img style={{ width: '100%', height: '100%' }} src="https://via.placeholder.com/14x18" alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
