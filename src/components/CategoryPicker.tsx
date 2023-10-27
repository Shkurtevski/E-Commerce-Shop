import Link from "next/link";
import React from "react";

const CategoryPicker: React.FC = () => {
  return (
    <div className="sec-banner bg0">
      <div className="row no-gutters">
        <div className="col-6 m-lr-auto respon4">
          {/* eslint-disable-next-line */}
          <Link href="/shop?q=women" passHref>
            <div className="block1 wrap-pic-w">
              {/* eslint-disable-next-line */}
              <img src="/images/banner-04.jpg" alt="IMG-BANNER" />
              <button className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Woman
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    Spring 2022
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </button>
            </div>
          </Link>
        </div>

        <div className="col-6 m-lr-auto respon4">
          {/* eslint-disable-next-line */}
          <Link href="/shop?q=man">
            <div className="block1 wrap-pic-w">
              {/* eslint-disable-next-line */}
              <img src="/images/banner-05.jpg" alt="IMG-BANNER" />
              <button className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                <div className="block1-txt-child1 flex-col-l">
                  <span className="block1-name ltext-102 trans-04 p-b-8">
                    Man
                  </span>

                  <span className="block1-info stext-102 trans-04">
                    Spring 2022
                  </span>
                </div>

                <div className="block1-txt-child2 p-b-4 trans-05">
                  <div className="block1-link stext-101 cl0 trans-09">
                    Shop Now
                  </div>
                </div>
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryPicker;
