import type { Schema, Attribute } from '@strapi/strapi';

export interface AppracadabraComponentsWhyUsSection extends Schema.Component {
  collectionName: 'components_appracadabra_components_why_us_sections';
  info: {
    displayName: 'WhyUsSection';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    FeatureSection: Attribute.Component<
      'appracadabra-components.why-us-features',
      true
    >;
  };
}

export interface AppracadabraComponentsWhyUsFeatures extends Schema.Component {
  collectionName: 'components_appracadabra_components_why_us_features';
  info: {
    displayName: 'WhyUsFeatures';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    icons: Attribute.Enumeration<
      ['CloudArrowUpIcon', 'LockClosedIcon', 'ArrowPathIcon', 'FingerPrintIcon']
    >;
  };
}

export interface AppracadabraComponentsTestimonialSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    titleDescription: Attribute.String;
    FeatureTestimonialCard: Attribute.Component<
      'appracadabra-components.feature-testimonial-section',
      true
    >;
    TestimonialCard: Attribute.Component<
      'appracadabra-components.feature-testimonial-section',
      true
    >;
  };
}

export interface AppracadabraComponentsSocialLinks extends Schema.Component {
  collectionName: 'components_appracadabra_components_social_links';
  info: {
    displayName: 'SocialLinks';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    href: Attribute.String;
    icon: Attribute.String;
  };
}

export interface AppracadabraComponentsOurAppsSection extends Schema.Component {
  collectionName: 'components_appracadabra_components_our_apps_sections';
  info: {
    displayName: 'OurAppsSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Description: Attribute.String;
    Image: Attribute.Component<'appracadabra-components.image'>;
    buttonText: Attribute.String;
    buttonRedirect: Attribute.String;
    DescriptionSection: Attribute.Component<
      'appracadabra-components.our-apps-description-section',
      true
    >;
  };
}

export interface AppracadabraComponentsOurAppsDescriptionSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_our_apps_description_sections';
  info: {
    displayName: 'OurAppsDescriptionSection';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface AppracadabraComponentsNewsLetterSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_news_letter_sections';
  info: {
    displayName: 'NewsLetterSection';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface AppracadabraComponentsImage extends Schema.Component {
  collectionName: 'components_appracadabra_components_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    alt: Attribute.String;
    previewImage: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface AppracadabraComponentsHeroSection extends Schema.Component {
  collectionName: 'components_appracadabra_components_hero_sections';
  info: {
    displayName: 'HeroSection';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    buttonText: Attribute.String;
    ImageSection: Attribute.Component<'appracadabra-components.header-image-section'>;
    buttonRedirect: Attribute.String;
  };
}

export interface AppracadabraComponentsHeader extends Schema.Component {
  collectionName: 'components_appracadabra_components_headers';
  info: {
    displayName: 'header';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    href: Attribute.String;
    flyoutMenu: Attribute.Boolean & Attribute.DefaultTo<false>;
    Options: Attribute.Component<'appracadabra-components.flyout-menu', true>;
  };
}

export interface AppracadabraComponentsHeaderImageSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_header_image_sections';
  info: {
    displayName: 'HeaderImageSection';
    description: '';
  };
  attributes: {
    firstImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    secondImage: Attribute.Media<'images', true>;
    thirdImage: Attribute.Media<'images', true>;
    fourthImage: Attribute.Media<'images', true>;
    fifthImage: Attribute.Media<'images', true>;
    sixthImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface AppracadabraComponentsFooterSection extends Schema.Component {
  collectionName: 'components_appracadabra_components_footer_sections';
  info: {
    displayName: 'FooterSection';
    description: '';
  };
  attributes: {
    NavigationList: Attribute.Component<
      'appracadabra-components.footer-navigation-list',
      true
    >;
    title: Attribute.String;
  };
}

export interface AppracadabraComponentsFooterNavigationList
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_footer_navigation_lists';
  info: {
    displayName: 'FooterNavigationList';
  };
  attributes: {
    name: Attribute.String;
    href: Attribute.String;
  };
}

export interface AppracadabraComponentsFlyoutMenu extends Schema.Component {
  collectionName: 'components_appracadabra_components_flyout_menus';
  info: {
    displayName: 'FlyoutMenu';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    href: Attribute.String;
    icon: Attribute.Enumeration<
      [
        'Popover',
        'ChartPieIcon',
        'CursorArrowRaysIcon',
        'ArrowPathIcon',
        'CloudArrowUpIcon',
        'FingerPrintIcon',
        'LockClosedIcon'
      ]
    >;
  };
}

export interface AppracadabraComponentsFeatureTestimonialSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_feature_testimonial_sections';
  info: {
    displayName: 'TestimonialFeatureSection';
    description: '';
  };
  attributes: {
    bodyContent: Attribute.Text;
    authorName: Attribute.String;
    authorTag: Attribute.String;
    authorImageUrl: Attribute.String;
  };
}

export interface AppracadabraComponentsCtAsection extends Schema.Component {
  collectionName: 'components_appracadabra_components_ct_asections';
  info: {
    displayName: 'CTAsection';
    description: '';
  };
  attributes: {
    titleSectionOne: Attribute.String;
    titleSectionTwo: Attribute.String;
    onClickButton: Attribute.String;
    onClickRedirect: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'appracadabra-components.why-us-section': AppracadabraComponentsWhyUsSection;
      'appracadabra-components.why-us-features': AppracadabraComponentsWhyUsFeatures;
      'appracadabra-components.testimonial-section': AppracadabraComponentsTestimonialSection;
      'appracadabra-components.social-links': AppracadabraComponentsSocialLinks;
      'appracadabra-components.our-apps-section': AppracadabraComponentsOurAppsSection;
      'appracadabra-components.our-apps-description-section': AppracadabraComponentsOurAppsDescriptionSection;
      'appracadabra-components.news-letter-section': AppracadabraComponentsNewsLetterSection;
      'appracadabra-components.image': AppracadabraComponentsImage;
      'appracadabra-components.hero-section': AppracadabraComponentsHeroSection;
      'appracadabra-components.header': AppracadabraComponentsHeader;
      'appracadabra-components.header-image-section': AppracadabraComponentsHeaderImageSection;
      'appracadabra-components.footer-section': AppracadabraComponentsFooterSection;
      'appracadabra-components.footer-navigation-list': AppracadabraComponentsFooterNavigationList;
      'appracadabra-components.flyout-menu': AppracadabraComponentsFlyoutMenu;
      'appracadabra-components.feature-testimonial-section': AppracadabraComponentsFeatureTestimonialSection;
      'appracadabra-components.ct-asection': AppracadabraComponentsCtAsection;
    }
  }
}
