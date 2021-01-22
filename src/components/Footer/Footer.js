import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="py-4 bg-dark text-white text-right ">
            <div className="container">
                <div className="row footerBorder">
                    <div className="col-md-4 d-flex align-items-end"><p className="mt-auto">لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما</p></div>
                    <div className="col-md-2 ">
                        <h4 className="footer-title">روابط سريعة</h4>
                        <ul className="footer-links">
                            <li><a href="#home">الرئيسية</a></li>
                            <li><a href="#about">عن المستشفى</a></li>
                            <li><a href="#sent">ارسال طلب</a></li>
                            <li><a href="#prescriptions">الوصفات الطبية</a></li>
                            <li><a href="#about">محفظتي</a></li>
                            <li><a href="#contactus">تواصل معنا</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 ">
                        <h4 className="footer-title">معلومات عنا</h4>
                        <ul className="footer-links">
                            <li><a href="#faq">FAQ</a>
                            </li>
                            <li><a href="#terms">شروط الاستخدام</a></li>
                            <li><a href="#Privacy">سياسة الخصوصية</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 ">
                        <h4 className="footer-title second">نشرة البريد الالكترونى</h4>
                        <p>اشترك معنا ببريدك الالكترون للحصول على احدث الاخبار</p>
                        <div className="footer input-group mb-3">
                            <input type="text" className="form-control" placeholder="البريد الالكترونى" aria-label="email" aria-describedby="subscribe by email" />
                            <div className="input-group-append">
                                <button className="btn" type="button" style={{background:'#31c0c9',color:'#fff'}}>اشترك</button>
                            </div>
                        </div>
                        <h4 className="footer-title second">تابعنا على</h4>
                        <span className="soicalIcons"><i className="fab fa-facebook"></i> &nbsp; <i className="fab fa-twitter"></i> &nbsp; <i className="fab fa-linkedin"></i></span>
                    </div>

                </div>
                <p className="m-0 mt-2 text-center text-white">© جميع الحقوق محفوظة</p>
            </div>
        </footer>
    );
};

export default Footer;