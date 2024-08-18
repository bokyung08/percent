import React from 'react';

function StatusBar() {
  return (
    <div style={{ width: '100%', height: 40, position: 'relative' }}>
      <div style={{ position: 'absolute', top: 10, right: 20, display: 'flex', alignItems: 'center' }}>
        <div style={{ width: 28, height: 14, position: 'relative' }}>
          <div style={{ width: 25, height: 14, opacity: 0.35, borderRadius: 3.5, border: '1px black solid' }} />
          <div style={{ width: 21, height: 10, position: 'absolute', top: 2, left: 2, background: 'black', borderRadius: 3 }} />
          <div style={{ width: 2, height: 4, position: 'absolute', top: 5, right: 1, opacity: 0.35, background: 'black' }}></div>
        </div>
        <img style={{ width: 21, height: 15, marginLeft: 10 }} src="https://via.placeholder.com/21x15" alt="icon" />
        <div style={{ width: 22, height: 13, marginLeft: 10 }}>
          <div style={{ width: 4, height: 13, background: 'black', borderRadius: 1.5, position: 'absolute', bottom: 0, left: 18 }} />
          <div style={{ width: 4, height: 10, background: 'black', borderRadius: 1.5, position: 'absolute', bottom: 3, left: 12 }} />
          <div style={{ width: 4, height: 7, background: 'black', borderRadius: 1.5, position: 'absolute', bottom: 6, left: 6 }} />
          <div style={{ width: 4, height: 5, background: 'black', borderRadius: 1.5, position: 'absolute', bottom: 8, left: 0 }} />
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
