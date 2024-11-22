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
   </>
   
  );
}

export default About;
