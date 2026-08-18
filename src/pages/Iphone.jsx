import { Link } from 'react-router-dom';

export default function iphone() {
  return (
    <div>
      <h1>iPhone modeller</h1>

      <div className="image-row">
        <div className="model-item">
          <a href="/tillverkare">
            <img src="/Iphone/image_4.png" alt="Iphone_17" />
          </a>
          <p>Iphone 17</p>
        </div>

        <div className="model-item">
          <a href="/tillverkare">
            <img src="/Iphone/image_5.png" alt="Iphone_16" />
          </a>
          <p>Iphone 16</p>
        </div>

        <div className="model-item">
          <a href="/tillverkare">
            <img src="/Iphone/image_7.png" alt="Iphone_15" />
          </a>
          <p>Iphone 15</p>
        </div>

        <div className="model-item">
          <a href="/tillverkare">
            <img src="/Iphone/image_8.png" alt="Iphone_14" />
          </a>
          <p>Iphone 14</p>
        </div>
      </div>

      <button className="pro-model" type="button">Pro modeller</button>
    </div>
  );
}