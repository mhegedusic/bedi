import React from 'react';
import { useTranslation } from 'react-i18next';

function About() {
  const { t } = useTranslation();

  return (
    <>
    <div className='ms-4 aboutPage'>
      <h2 className='pt-4'>{t('about_title')}</h2>
      <p>{t('about_content').split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}</p>
      <h2 className='pt-4'>{t("whatWeDo")}</h2>
      <p>{t('about_content2').split('\n').map((line, index) => (
        <p key={index}>{line}</p>
      ))}</p>

   </div>
   <div className='iframes mt-5'>
   <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F523214256808270%2F&show_text=false&width=267&t=0" width="267" height="476"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" className='iframes'></iframe> 
   <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1574440566427739%2F&show_text=false&width=267&t=0" width="267" height="476"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
   <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F902108621427359%2F&show_text=false&width=267&t=0" width="267" height="476" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
   </div>

   <div className='whereAreWe'>
    <h2>{t("whereAreWe")}</h2>
   </div>
   <div>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42237.94683601958!2d13.338208659038354!3d48.574006501264954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477458100dfb2dfd%3A0x1c1d25a73b76d1b0!2s94036%20Passau%2C%20Njema%C4%8Dka!5e0!3m2!1shr!2shr!4v1732276984705!5m2!1shr!2shr" className='location' width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
   </>
   
  );
}

export default About;
