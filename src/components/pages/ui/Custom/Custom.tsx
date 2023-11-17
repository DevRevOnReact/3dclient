
import Image from "next/image";
import React, { useEffect, useState } from "react";

import cx from './style.module.scss';

interface CustomProps {
    title:string
}

const Custom: React.FC<CustomProps> = ({title}) => (
    <div className={cx('custom')} style={{width:'1 auto', marginLeft:'140px', marginRight:'140px'}}>
    <div className={cx('custom__title')}>
   {title}
    </div>
    <div className={cx('custom__buttons')}>
      <button>
      New Releases
      </button>
      <button>
      On Sale
      </button>
      <button>
      Popular
      </button>
      <button>
      High Rating
      </button>
    </div>
    <a className={cx('link')} href="#">
      Ссылка
    </a>
  </div>
);


export default Custom
