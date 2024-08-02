import type { Schema, Attribute } from '@strapi/strapi';

export interface AppracadabraComponentsWhyUsSection extends Schema.Component {
  collectionName: 'components_appracadabra_components_why_us_sections';
  info: {
    displayName: 'WhyUsSection';
    description: '';
  };
  attributes: {
    FeatureSection: Attribute.Component<
      'appracadabra-components.why-us-features',
      true
    >;
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    description: Attribute.Component<'appracadabra-components.customize-description'>;
  };
}

export interface AppracadabraComponentsWhyUsFeatures extends Schema.Component {
  collectionName: 'components_appracadabra_components_why_us_features';
  info: {
    displayName: 'WhyUsFeatures';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    icons: Attribute.Enumeration<
      [
        'AcademicCapIcon',
        'AdjustmentsHorizontalIcon',
        'AdjustmentsVerticalIcon',
        'ArchiveBoxArrowDownIcon',
        'ArchiveBoxXMarkIcon',
        'ArchiveBoxIcon',
        'ArrowDownCircleIcon',
        'ArrowDownLeftIcon',
        'ArrowDownOnSquareStackIcon',
        'ArrowDownOnSquareIcon',
        'ArrowDownRightIcon',
        'ArrowDownTrayIcon',
        'ArrowDownIcon',
        'ArrowLeftCircleIcon',
        'ArrowLeftEndOnRectangleIcon',
        'ArrowLeftOnRectangleIcon',
        'ArrowLeftStartOnRectangleIcon',
        'ArrowLeftIcon',
        'ArrowLongDownIcon',
        'ArrowLongLeftIcon',
        'ArrowLongRightIcon',
        'ArrowLongUpIcon',
        'ArrowPathRoundedSquareIcon',
        'ArrowPathIcon',
        'ArrowRightCircleIcon',
        'ArrowRightEndOnRectangleIcon',
        'ArrowRightOnRectangleIcon',
        'ArrowRightStartOnRectangleIcon',
        'ArrowRightIcon',
        'ArrowSmallDownIcon',
        'ArrowSmallLeftIcon',
        'ArrowSmallRightIcon',
        'ArrowSmallUpIcon',
        'ArrowTopRightOnSquareIcon',
        'ArrowTrendingDownIcon',
        'ArrowTrendingUpIcon',
        'ArrowTurnDownLeftIcon',
        'ArrowTurnDownRightIcon',
        'ArrowTurnLeftDownIcon',
        'ArrowTurnLeftUpIcon',
        'ArrowTurnRightDownIcon',
        'ArrowTurnRightUpIcon',
        'ArrowTurnUpLeftIcon',
        'ArrowTurnUpRightIcon',
        'ArrowUpCircleIcon',
        'ArrowUpLeftIcon',
        'ArrowUpOnSquareStackIcon',
        'ArrowUpOnSquareIcon',
        'ArrowUpRightIcon',
        'ArrowUpTrayIcon',
        'ArrowUpIcon',
        'ArrowUturnDownIcon',
        'ArrowUturnLeftIcon',
        'ArrowUturnRightIcon',
        'ArrowUturnUpIcon',
        'ArrowsPointingInIcon',
        'ArrowsPointingOutIcon',
        'ArrowsRightLeftIcon',
        'ArrowsUpDownIcon',
        'AtSymbolIcon',
        'BackspaceIcon',
        'BackwardIcon',
        'BanknotesIcon',
        'Bars2Icon',
        'Bars3BottomLeftIcon',
        'Bars3BottomRightIcon',
        'Bars3CenterLeftIcon',
        'Bars3Icon',
        'Bars4Icon',
        'BarsArrowDownIcon',
        'BarsArrowUpIcon',
        'Battery0Icon',
        'Battery100Icon',
        'Battery50Icon',
        'BeakerIcon',
        'BellAlertIcon',
        'BellSlashIcon',
        'BellSnoozeIcon',
        'BellIcon',
        'BoldIcon',
        'BoltSlashIcon',
        'BoltIcon',
        'BookOpenIcon',
        'BookmarkSlashIcon',
        'BookmarkSquareIcon',
        'BookmarkIcon',
        'BriefcaseIcon',
        'BugAntIcon',
        'BuildingLibraryIcon',
        'BuildingOffice2Icon',
        'BuildingOfficeIcon',
        'BuildingStorefrontIcon',
        'CakeIcon',
        'CalculatorIcon',
        'CalendarDateRangeIcon',
        'CalendarDaysIcon',
        'CalendarIcon',
        'CameraIcon',
        'ChartBarSquareIcon',
        'ChartBarIcon',
        'ChartPieIcon',
        'ChatBubbleBottomCenterTextIcon',
        'ChatBubbleBottomCenterIcon',
        'ChatBubbleLeftEllipsisIcon',
        'ChatBubbleLeftRightIcon',
        'ChatBubbleLeftIcon',
        'ChatBubbleOvalLeftEllipsisIcon',
        'ChatBubbleOvalLeftIcon',
        'CheckBadgeIcon',
        'CheckCircleIcon',
        'CheckIcon',
        'ChevronDoubleDownIcon',
        'ChevronDoubleLeftIcon',
        'ChevronDoubleRightIcon',
        'ChevronDoubleUpIcon',
        'ChevronDownIcon',
        'ChevronLeftIcon',
        'ChevronRightIcon',
        'ChevronUpDownIcon',
        'ChevronUpIcon',
        'CircleStackIcon',
        'ClipboardDocumentCheckIcon',
        'ClipboardDocumentListIcon',
        'ClipboardDocumentIcon',
        'ClipboardIcon',
        'ClockIcon',
        'CloudArrowDownIcon',
        'CloudArrowUpIcon',
        'CloudIcon',
        'CodeBracketSquareIcon',
        'CodeBracketIcon',
        'Cog6ToothIcon',
        'Cog8ToothIcon',
        'CogIcon',
        'CommandLineIcon',
        'ComputerDesktopIcon',
        'CpuChipIcon',
        'CreditCardIcon',
        'CubeTransparentIcon',
        'CubeIcon',
        'CurrencyBangladeshiIcon',
        'CurrencyDollarIcon',
        'CurrencyEuroIcon',
        'CurrencyPoundIcon',
        'CurrencyRupeeIcon',
        'CurrencyYenIcon',
        'CursorArrowRaysIcon',
        'CursorArrowRippleIcon',
        'DevicePhoneMobileIcon',
        'DeviceTabletIcon',
        'DivideIcon',
        'DocumentArrowDownIcon',
        'DocumentArrowUpIcon',
        'DocumentChartBarIcon',
        'DocumentCheckIcon',
        'DocumentCurrencyBangladeshiIcon',
        'DocumentCurrencyDollarIcon',
        'DocumentCurrencyEuroIcon',
        'DocumentCurrencyPoundIcon',
        'DocumentCurrencyRupeeIcon',
        'DocumentCurrencyYenIcon',
        'DocumentDuplicateIcon',
        'DocumentMagnifyingGlassIcon',
        'DocumentMinusIcon',
        'DocumentPlusIcon',
        'DocumentTextIcon',
        'DocumentIcon',
        'EllipsisHorizontalCircleIcon',
        'EllipsisHorizontalIcon',
        'EllipsisVerticalIcon',
        'EnvelopeOpenIcon',
        'EnvelopeIcon',
        'EqualsIcon',
        'ExclamationCircleIcon',
        'ExclamationTriangleIcon',
        'EyeDropperIcon',
        'EyeSlashIcon',
        'EyeIcon',
        'FaceFrownIcon',
        'FaceSmileIcon',
        'FilmIcon',
        'FingerPrintIcon',
        'FireIcon',
        'FlagIcon',
        'FolderArrowDownIcon',
        'FolderMinusIcon',
        'FolderOpenIcon',
        'FolderPlusIcon',
        'FolderIcon',
        'ForwardIcon',
        'FunnelIcon',
        'GifIcon',
        'GiftTopIcon',
        'GiftIcon',
        'GlobeAltIcon',
        'GlobeAmericasIcon',
        'GlobeAsiaAustraliaIcon',
        'GlobeEuropeAfricaIcon',
        'H1Icon',
        'H2Icon',
        'H3Icon',
        'HandRaisedIcon',
        'HandThumbDownIcon',
        'HandThumbUpIcon',
        'HashtagIcon',
        'HeartIcon',
        'HomeModernIcon',
        'HomeIcon',
        'IdentificationIcon',
        'InboxArrowDownIcon',
        'InboxStackIcon',
        'InboxIcon',
        'InformationCircleIcon',
        'ItalicIcon',
        'KeyIcon',
        'LanguageIcon',
        'LifebuoyIcon',
        'LightBulbIcon',
        'LinkSlashIcon',
        'LinkIcon',
        'ListBulletIcon',
        'LockClosedIcon',
        'LockOpenIcon',
        'MagnifyingGlassCircleIcon',
        'MagnifyingGlassMinusIcon',
        'MagnifyingGlassPlusIcon',
        'MagnifyingGlassIcon',
        'MapPinIcon',
        'MapIcon',
        'MegaphoneIcon',
        'MicrophoneIcon',
        'MinusCircleIcon',
        'MinusSmallIcon',
        'MinusIcon',
        'MoonIcon',
        'MusicalNoteIcon',
        'NewspaperIcon',
        'NoSymbolIcon',
        'NumberedListIcon',
        'PaintBrushIcon',
        'PaperAirplaneIcon',
        'PaperClipIcon',
        'PauseCircleIcon',
        'PauseIcon',
        'PencilSquareIcon',
        'PencilIcon',
        'PercentBadgeIcon',
        'PhoneArrowDownLeftIcon',
        'PhoneArrowUpRightIcon',
        'PhoneXMarkIcon',
        'PhoneIcon',
        'PhotoIcon',
        'PlayCircleIcon',
        'PlayPauseIcon',
        'PlayIcon',
        'PlusCircleIcon',
        'PlusSmallIcon',
        'PlusIcon',
        'PowerIcon',
        'PresentationChartBarIcon',
        'PresentationChartLineIcon',
        'PrinterIcon',
        'PuzzlePieceIcon',
        'QrCodeIcon',
        'QuestionMarkCircleIcon',
        'QueueListIcon',
        'RadioIcon',
        'ReceiptPercentIcon',
        'ReceiptRefundIcon',
        'RectangleGroupIcon',
        'RectangleStackIcon',
        'RocketLaunchIcon',
        'RssIcon',
        'ScaleIcon',
        'ScissorsIcon',
        'ServerStackIcon',
        'ServerIcon',
        'ShareIcon',
        'ShieldCheckIcon',
        'ShieldExclamationIcon',
        'ShoppingBagIcon',
        'ShoppingCartIcon',
        'SignalSlashIcon',
        'SignalIcon',
        'SlashIcon',
        'SparklesIcon',
        'SpeakerWaveIcon',
        'SpeakerXMarkIcon',
        'Square2StackIcon',
        'Square3Stack3DIcon',
        'Squares2X2Icon',
        'SquaresPlusIcon',
        'StarIcon',
        'StopCircleIcon',
        'StopIcon',
        'StrikethroughIcon',
        'SunIcon',
        'SwatchIcon',
        'TableCellsIcon',
        'TagIcon',
        'TicketIcon',
        'TrashIcon',
        'TrophyIcon',
        'TruckIcon',
        'TvIcon',
        'UnderlineIcon',
        'UserCircleIcon',
        'UserGroupIcon',
        'UserMinusIcon',
        'UserPlusIcon',
        'UserIcon',
        'UsersIcon',
        'VariableIcon',
        'VideoCameraSlashIcon',
        'VideoCameraIcon',
        'ViewColumnsIcon',
        'ViewfinderCircleIcon',
        'WalletIcon',
        'WifiIcon',
        'WindowIcon',
        'WrenchScrewdriverIcon',
        'WrenchIcon',
        'XCircleIcon',
        'XMarkIcon'
      ]
    >;
    descriptionLineSpacing: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
    descriptionFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
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
    FeatureTestimonialCard: Attribute.Component<
      'appracadabra-components.feature-testimonial-section',
      true
    >;
    TestimonialCard: Attribute.Component<
      'appracadabra-components.feature-testimonial-section',
      true
    >;
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    description: Attribute.Component<'appracadabra-components.customize-description'>;
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
    icon: Attribute.Enumeration<
      ['Facebook', 'Instagram', 'X', 'GitHub', 'Youtube']
    >;
  };
}

export interface AppracadabraComponentsOurAppsSection extends Schema.Component {
  collectionName: 'components_appracadabra_components_our_apps_sections';
  info: {
    displayName: 'OurAppsSection';
    description: '';
  };
  attributes: {
    Image: Attribute.Component<'appracadabra-components.image'>;
    DescriptionSection: Attribute.Component<
      'appracadabra-components.our-apps-description-section',
      true
    >;
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    ButtonSection: Attribute.Component<'appracadabra-components.customize-button'>;
  };
}

export interface AppracadabraComponentsOurAppsDescriptionSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_our_apps_description_sections';
  info: {
    displayName: 'OurAppsDescriptionSection';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    size: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    lineSpacing: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
  };
}

export interface AppracadabraComponentsNewsLetterSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_news_letter_sections';
  info: {
    displayName: 'NewsLetterSection';
    description: '';
  };
  attributes: {
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    Description: Attribute.Component<'appracadabra-components.customize-description'>;
  };
}

export interface AppracadabraComponentsMetaData extends Schema.Component {
  collectionName: 'components_appracadabra_components_meta_data';
  info: {
    displayName: 'Meta-data';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
  };
}

export interface AppracadabraComponentsLandingPageWhyUs
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_whyuses';
  info: {
    displayName: 'Landing-Page-WhyUs';
    description: '';
  };
  attributes: {
    FeatureList: Attribute.Component<
      'appracadabra-components.landing-page-why-us-feature-list',
      true
    >;
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    description: Attribute.Component<'appracadabra-components.customize-description'>;
    mainTitle: Attribute.Component<'appracadabra-components.blog-page-title'>;
  };
}

export interface AppracadabraComponentsLandingPageWhyUsFeatureList
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_why_us_feature_lists';
  info: {
    displayName: 'Landing-Page-WhyUs-Feature-List';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    icon: Attribute.Enumeration<
      [
        'AcademicCapIcon',
        'AdjustmentsHorizontalIcon',
        'AdjustmentsVerticalIcon',
        'ArchiveBoxArrowDownIcon',
        'ArchiveBoxXMarkIcon',
        'ArchiveBoxIcon',
        'ArrowDownCircleIcon',
        'ArrowDownLeftIcon',
        'ArrowDownOnSquareStackIcon',
        'ArrowDownOnSquareIcon',
        'ArrowDownRightIcon',
        'ArrowDownTrayIcon',
        'ArrowDownIcon',
        'ArrowLeftCircleIcon',
        'ArrowLeftEndOnRectangleIcon',
        'ArrowLeftOnRectangleIcon',
        'ArrowLeftStartOnRectangleIcon',
        'ArrowLeftIcon',
        'ArrowLongDownIcon',
        'ArrowLongLeftIcon',
        'ArrowLongRightIcon',
        'ArrowLongUpIcon',
        'ArrowPathRoundedSquareIcon',
        'ArrowPathIcon',
        'ArrowRightCircleIcon',
        'ArrowRightEndOnRectangleIcon',
        'ArrowRightOnRectangleIcon',
        'ArrowRightStartOnRectangleIcon',
        'ArrowRightIcon',
        'ArrowSmallDownIcon',
        'ArrowSmallLeftIcon',
        'ArrowSmallRightIcon',
        'ArrowSmallUpIcon',
        'ArrowTopRightOnSquareIcon',
        'ArrowTrendingDownIcon',
        'ArrowTrendingUpIcon',
        'ArrowTurnDownLeftIcon',
        'ArrowTurnDownRightIcon',
        'ArrowTurnLeftDownIcon',
        'ArrowTurnLeftUpIcon',
        'ArrowTurnRightDownIcon',
        'ArrowTurnRightUpIcon',
        'ArrowTurnUpLeftIcon',
        'ArrowTurnUpRightIcon',
        'ArrowUpCircleIcon',
        'ArrowUpLeftIcon',
        'ArrowUpOnSquareStackIcon',
        'ArrowUpOnSquareIcon',
        'ArrowUpRightIcon',
        'ArrowUpTrayIcon',
        'ArrowUpIcon',
        'ArrowUturnDownIcon',
        'ArrowUturnLeftIcon',
        'ArrowUturnRightIcon',
        'ArrowUturnUpIcon',
        'ArrowsPointingInIcon',
        'ArrowsPointingOutIcon',
        'ArrowsRightLeftIcon',
        'ArrowsUpDownIcon',
        'AtSymbolIcon',
        'BackspaceIcon',
        'BackwardIcon',
        'BanknotesIcon',
        'Bars2Icon',
        'Bars3BottomLeftIcon',
        'Bars3BottomRightIcon',
        'Bars3CenterLeftIcon',
        'Bars3Icon',
        'Bars4Icon',
        'BarsArrowDownIcon',
        'BarsArrowUpIcon',
        'Battery0Icon',
        'Battery100Icon',
        'Battery50Icon',
        'BeakerIcon',
        'BellAlertIcon',
        'BellSlashIcon',
        'BellSnoozeIcon',
        'BellIcon',
        'BoldIcon',
        'BoltSlashIcon',
        'BoltIcon',
        'BookOpenIcon',
        'BookmarkSlashIcon',
        'BookmarkSquareIcon',
        'BookmarkIcon',
        'BriefcaseIcon',
        'BugAntIcon',
        'BuildingLibraryIcon',
        'BuildingOffice2Icon',
        'BuildingOfficeIcon',
        'BuildingStorefrontIcon',
        'CakeIcon',
        'CalculatorIcon',
        'CalendarDateRangeIcon',
        'CalendarDaysIcon',
        'CalendarIcon',
        'CameraIcon',
        'ChartBarSquareIcon',
        'ChartBarIcon',
        'ChartPieIcon',
        'ChatBubbleBottomCenterTextIcon',
        'ChatBubbleBottomCenterIcon',
        'ChatBubbleLeftEllipsisIcon',
        'ChatBubbleLeftRightIcon',
        'ChatBubbleLeftIcon',
        'ChatBubbleOvalLeftEllipsisIcon',
        'ChatBubbleOvalLeftIcon',
        'CheckBadgeIcon',
        'CheckCircleIcon',
        'CheckIcon',
        'ChevronDoubleDownIcon',
        'ChevronDoubleLeftIcon',
        'ChevronDoubleRightIcon',
        'ChevronDoubleUpIcon',
        'ChevronDownIcon',
        'ChevronLeftIcon',
        'ChevronRightIcon',
        'ChevronUpDownIcon',
        'ChevronUpIcon',
        'CircleStackIcon',
        'ClipboardDocumentCheckIcon',
        'ClipboardDocumentListIcon',
        'ClipboardDocumentIcon',
        'ClipboardIcon',
        'ClockIcon',
        'CloudArrowDownIcon',
        'CloudArrowUpIcon',
        'CloudIcon',
        'CodeBracketSquareIcon',
        'CodeBracketIcon',
        'Cog6ToothIcon',
        'Cog8ToothIcon',
        'CogIcon',
        'CommandLineIcon',
        'ComputerDesktopIcon',
        'CpuChipIcon',
        'CreditCardIcon',
        'CubeTransparentIcon',
        'CubeIcon',
        'CurrencyBangladeshiIcon',
        'CurrencyDollarIcon',
        'CurrencyEuroIcon',
        'CurrencyPoundIcon',
        'CurrencyRupeeIcon',
        'CurrencyYenIcon',
        'CursorArrowRaysIcon',
        'CursorArrowRippleIcon',
        'DevicePhoneMobileIcon',
        'DeviceTabletIcon',
        'DivideIcon',
        'DocumentArrowDownIcon',
        'DocumentArrowUpIcon',
        'DocumentChartBarIcon',
        'DocumentCheckIcon',
        'DocumentCurrencyBangladeshiIcon',
        'DocumentCurrencyDollarIcon',
        'DocumentCurrencyEuroIcon',
        'DocumentCurrencyPoundIcon',
        'DocumentCurrencyRupeeIcon',
        'DocumentCurrencyYenIcon',
        'DocumentDuplicateIcon',
        'DocumentMagnifyingGlassIcon',
        'DocumentMinusIcon',
        'DocumentPlusIcon',
        'DocumentTextIcon',
        'DocumentIcon',
        'EllipsisHorizontalCircleIcon',
        'EllipsisHorizontalIcon',
        'EllipsisVerticalIcon',
        'EnvelopeOpenIcon',
        'EnvelopeIcon',
        'EqualsIcon',
        'ExclamationCircleIcon',
        'ExclamationTriangleIcon',
        'EyeDropperIcon',
        'EyeSlashIcon',
        'EyeIcon',
        'FaceFrownIcon',
        'FaceSmileIcon',
        'FilmIcon',
        'FingerPrintIcon',
        'FireIcon',
        'FlagIcon',
        'FolderArrowDownIcon',
        'FolderMinusIcon',
        'FolderOpenIcon',
        'FolderPlusIcon',
        'FolderIcon',
        'ForwardIcon',
        'FunnelIcon',
        'GifIcon',
        'GiftTopIcon',
        'GiftIcon',
        'GlobeAltIcon',
        'GlobeAmericasIcon',
        'GlobeAsiaAustraliaIcon',
        'GlobeEuropeAfricaIcon',
        'H1Icon',
        'H2Icon',
        'H3Icon',
        'HandRaisedIcon',
        'HandThumbDownIcon',
        'HandThumbUpIcon',
        'HashtagIcon',
        'HeartIcon',
        'HomeModernIcon',
        'HomeIcon',
        'IdentificationIcon',
        'InboxArrowDownIcon',
        'InboxStackIcon',
        'InboxIcon',
        'InformationCircleIcon',
        'ItalicIcon',
        'KeyIcon',
        'LanguageIcon',
        'LifebuoyIcon',
        'LightBulbIcon',
        'LinkSlashIcon',
        'LinkIcon',
        'ListBulletIcon',
        'LockClosedIcon',
        'LockOpenIcon',
        'MagnifyingGlassCircleIcon',
        'MagnifyingGlassMinusIcon',
        'MagnifyingGlassPlusIcon',
        'MagnifyingGlassIcon',
        'MapPinIcon',
        'MapIcon',
        'MegaphoneIcon',
        'MicrophoneIcon',
        'MinusCircleIcon',
        'MinusSmallIcon',
        'MinusIcon',
        'MoonIcon',
        'MusicalNoteIcon',
        'NewspaperIcon',
        'NoSymbolIcon',
        'NumberedListIcon',
        'PaintBrushIcon',
        'PaperAirplaneIcon',
        'PaperClipIcon',
        'PauseCircleIcon',
        'PauseIcon',
        'PencilSquareIcon',
        'PencilIcon',
        'PercentBadgeIcon',
        'PhoneArrowDownLeftIcon',
        'PhoneArrowUpRightIcon',
        'PhoneXMarkIcon',
        'PhoneIcon',
        'PhotoIcon',
        'PlayCircleIcon',
        'PlayPauseIcon',
        'PlayIcon',
        'PlusCircleIcon',
        'PlusSmallIcon',
        'PlusIcon',
        'PowerIcon',
        'PresentationChartBarIcon',
        'PresentationChartLineIcon',
        'PrinterIcon',
        'PuzzlePieceIcon',
        'QrCodeIcon',
        'QuestionMarkCircleIcon',
        'QueueListIcon',
        'RadioIcon',
        'ReceiptPercentIcon',
        'ReceiptRefundIcon',
        'RectangleGroupIcon',
        'RectangleStackIcon',
        'RocketLaunchIcon',
        'RssIcon',
        'ScaleIcon',
        'ScissorsIcon',
        'ServerStackIcon',
        'ServerIcon',
        'ShareIcon',
        'ShieldCheckIcon',
        'ShieldExclamationIcon',
        'ShoppingBagIcon',
        'ShoppingCartIcon',
        'SignalSlashIcon',
        'SignalIcon',
        'SlashIcon',
        'SparklesIcon',
        'SpeakerWaveIcon',
        'SpeakerXMarkIcon',
        'Square2StackIcon',
        'Square3Stack3DIcon',
        'Squares2X2Icon',
        'SquaresPlusIcon',
        'StarIcon',
        'StopCircleIcon',
        'StopIcon',
        'StrikethroughIcon',
        'SunIcon',
        'SwatchIcon',
        'TableCellsIcon',
        'TagIcon',
        'TicketIcon',
        'TrashIcon',
        'TrophyIcon',
        'TruckIcon',
        'TvIcon',
        'UnderlineIcon',
        'UserCircleIcon',
        'UserGroupIcon',
        'UserMinusIcon',
        'UserPlusIcon',
        'UserIcon',
        'UsersIcon',
        'VariableIcon',
        'VideoCameraSlashIcon',
        'VideoCameraIcon',
        'ViewColumnsIcon',
        'ViewfinderCircleIcon',
        'WalletIcon',
        'WifiIcon',
        'WindowIcon',
        'WrenchScrewdriverIcon',
        'WrenchIcon',
        'XCircleIcon',
        'XMarkIcon'
      ]
    >;
    nameFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    nameLineSpace: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    descriptionLineSpacing: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
    descriptionFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
  };
}

export interface AppracadabraComponentsLandingPageTestimonials
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_testimonials';
  info: {
    displayName: 'Landing-Page-Testimonials';
    description: '';
  };
  attributes: {
    userName: Attribute.String;
    userProfile: Attribute.String;
    userFeedBack: Attribute.String;
    imgAlt: Attribute.String;
    Image: Attribute.Media<'images'>;
    userNameFont: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    userProfileFont: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    userFeedBackFont: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
  };
}

export interface AppracadabraComponentsLandingPagePrincingContent
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_princing_contents';
  info: {
    displayName: 'Landing-Page-PrincingContent';
    description: '';
  };
  attributes: {
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    Description: Attribute.Component<'appracadabra-components.customize-description'>;
  };
}

export interface AppracadabraComponentsLandingPagePricingTiers
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_pricing_tiers';
  info: {
    displayName: 'Landing-Page-Pricing-Tiers';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    href: Attribute.String;
    featured: Attribute.Boolean & Attribute.DefaultTo<false>;
    price: Attribute.String;
    frequencyType: Attribute.String;
    MainFeatures: Attribute.Component<
      'appracadabra-components.landing-page-pricing-main-feature',
      true
    >;
  };
}

export interface AppracadabraComponentsLandingPagePricingMainFeature
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_pricing_main_features';
  info: {
    displayName: 'Landing-Page-Pricing-MainFeature';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    size: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    lineSpacing: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
  };
}

export interface AppracadabraComponentsLandingPagePricingFrequencies
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_pricing_frequencies';
  info: {
    displayName: 'Landing-Page--Pricing-Frequencies';
  };
  attributes: {
    value: Attribute.Enumeration<['Annually', 'Monthly']>;
  };
}

export interface AppracadabraComponentsLandingPageHeroSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_hero_sections';
  info: {
    displayName: 'Landing-Page-HeroSection';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    description: Attribute.Component<'appracadabra-components.customize-description'>;
    Button: Attribute.Component<'appracadabra-components.customize-button'>;
  };
}

export interface AppracadabraComponentsLandingPageFeature
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_features';
  info: {
    displayName: 'Landing-Page-Feature';
    description: '';
  };
  attributes: {
    FeatureList: Attribute.Component<
      'appracadabra-components.landing-page-feature-list',
      true
    >;
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    description: Attribute.Component<'appracadabra-components.customize-description'>;
  };
}

export interface AppracadabraComponentsLandingPageFeatureList
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_feature_lists';
  info: {
    displayName: 'Landing-Page-Feature-List';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    imageAlt: Attribute.String;
    image: Attribute.Media<'images'>;
    descriptionFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    descriptionLineSpacing: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
    nameFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    nameLineSpace: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
  };
}

export interface AppracadabraComponentsLandingPageFaq extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_faqs';
  info: {
    displayName: 'Landing-Page-FAQ';
    description: '';
  };
  attributes: {
    FAQlists: Attribute.Component<
      'appracadabra-components.landing-page-faq-lists',
      true
    >;
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    description: Attribute.Component<'appracadabra-components.customize-description'>;
  };
}

export interface AppracadabraComponentsLandingPageFaqLists
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_faq_lists';
  info: {
    displayName: 'Landing-Page-FAQ-Lists';
    description: '';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
    questionFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    answerLineSpace: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
    questionLineSpace: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
    answerFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
  };
}

export interface AppracadabraComponentsLandingPageCta extends Schema.Component {
  collectionName: 'components_appracadabra_components_landing_page_ctas';
  info: {
    displayName: 'Landing-Page-CTA';
    description: '';
  };
  attributes: {
    videoSrc: Attribute.Media<'videos'>;
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    mainTitle: Attribute.Component<'appracadabra-components.blog-page-title'>;
    description: Attribute.Component<'appracadabra-components.customize-description'>;
    Button: Attribute.Component<'appracadabra-components.customize-button'>;
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
    ImageSection: Attribute.Component<'appracadabra-components.header-image-section'>;
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    descriptionSection: Attribute.Component<'appracadabra-components.customize-description'>;
    Button: Attribute.Component<'appracadabra-components.customize-button'>;
  };
}

export interface AppracadabraComponentsHeading extends Schema.Component {
  collectionName: 'components_appracadabra_components_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    title: Attribute.String;
    tag: Attribute.String;
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
        'AcademicCapIcon',
        'AdjustmentsHorizontalIcon',
        'AdjustmentsVerticalIcon',
        'ArchiveBoxArrowDownIcon',
        'ArchiveBoxXMarkIcon',
        'ArchiveBoxIcon',
        'ArrowDownCircleIcon',
        'ArrowDownLeftIcon',
        'ArrowDownOnSquareStackIcon',
        'ArrowDownOnSquareIcon',
        'ArrowDownRightIcon',
        'ArrowDownTrayIcon',
        'ArrowDownIcon',
        'ArrowLeftCircleIcon',
        'ArrowLeftEndOnRectangleIcon',
        'ArrowLeftOnRectangleIcon',
        'ArrowLeftStartOnRectangleIcon',
        'ArrowLeftIcon',
        'ArrowLongDownIcon',
        'ArrowLongLeftIcon',
        'ArrowLongRightIcon',
        'ArrowLongUpIcon',
        'ArrowPathRoundedSquareIcon',
        'ArrowPathIcon',
        'ArrowRightCircleIcon',
        'ArrowRightEndOnRectangleIcon',
        'ArrowRightOnRectangleIcon',
        'ArrowRightStartOnRectangleIcon',
        'ArrowRightIcon',
        'ArrowSmallDownIcon',
        'ArrowSmallLeftIcon',
        'ArrowSmallRightIcon',
        'ArrowSmallUpIcon',
        'ArrowTopRightOnSquareIcon',
        'ArrowTrendingDownIcon',
        'ArrowTrendingUpIcon',
        'ArrowTurnDownLeftIcon',
        'ArrowTurnDownRightIcon',
        'ArrowTurnLeftDownIcon',
        'ArrowTurnLeftUpIcon',
        'ArrowTurnRightDownIcon',
        'ArrowTurnRightUpIcon',
        'ArrowTurnUpLeftIcon',
        'ArrowTurnUpRightIcon',
        'ArrowUpCircleIcon',
        'ArrowUpLeftIcon',
        'ArrowUpOnSquareStackIcon',
        'ArrowUpOnSquareIcon',
        'ArrowUpRightIcon',
        'ArrowUpTrayIcon',
        'ArrowUpIcon',
        'ArrowUturnDownIcon',
        'ArrowUturnLeftIcon',
        'ArrowUturnRightIcon',
        'ArrowUturnUpIcon',
        'ArrowsPointingInIcon',
        'ArrowsPointingOutIcon',
        'ArrowsRightLeftIcon',
        'ArrowsUpDownIcon',
        'AtSymbolIcon',
        'BackspaceIcon',
        'BackwardIcon',
        'BanknotesIcon',
        'Bars2Icon',
        'Bars3BottomLeftIcon',
        'Bars3BottomRightIcon',
        'Bars3CenterLeftIcon',
        'Bars3Icon',
        'Bars4Icon',
        'BarsArrowDownIcon',
        'BarsArrowUpIcon',
        'Battery0Icon',
        'Battery100Icon',
        'Battery50Icon',
        'BeakerIcon',
        'BellAlertIcon',
        'BellSlashIcon',
        'BellSnoozeIcon',
        'BellIcon',
        'BoldIcon',
        'BoltSlashIcon',
        'BoltIcon',
        'BookOpenIcon',
        'BookmarkSlashIcon',
        'BookmarkSquareIcon',
        'BookmarkIcon',
        'BriefcaseIcon',
        'BugAntIcon',
        'BuildingLibraryIcon',
        'BuildingOffice2Icon',
        'BuildingOfficeIcon',
        'BuildingStorefrontIcon',
        'CakeIcon',
        'CalculatorIcon',
        'CalendarDateRangeIcon',
        'CalendarDaysIcon',
        'CalendarIcon',
        'CameraIcon',
        'ChartBarSquareIcon',
        'ChartBarIcon',
        'ChartPieIcon',
        'ChatBubbleBottomCenterTextIcon',
        'ChatBubbleBottomCenterIcon',
        'ChatBubbleLeftEllipsisIcon',
        'ChatBubbleLeftRightIcon',
        'ChatBubbleLeftIcon',
        'ChatBubbleOvalLeftEllipsisIcon',
        'ChatBubbleOvalLeftIcon',
        'CheckBadgeIcon',
        'CheckCircleIcon',
        'CheckIcon',
        'ChevronDoubleDownIcon',
        'ChevronDoubleLeftIcon',
        'ChevronDoubleRightIcon',
        'ChevronDoubleUpIcon',
        'ChevronDownIcon',
        'ChevronLeftIcon',
        'ChevronRightIcon',
        'ChevronUpDownIcon',
        'ChevronUpIcon',
        'CircleStackIcon',
        'ClipboardDocumentCheckIcon',
        'ClipboardDocumentListIcon',
        'ClipboardDocumentIcon',
        'ClipboardIcon',
        'ClockIcon',
        'CloudArrowDownIcon',
        'CloudArrowUpIcon',
        'CloudIcon',
        'CodeBracketSquareIcon',
        'CodeBracketIcon',
        'Cog6ToothIcon',
        'Cog8ToothIcon',
        'CogIcon',
        'CommandLineIcon',
        'ComputerDesktopIcon',
        'CpuChipIcon',
        'CreditCardIcon',
        'CubeTransparentIcon',
        'CubeIcon',
        'CurrencyBangladeshiIcon',
        'CurrencyDollarIcon',
        'CurrencyEuroIcon',
        'CurrencyPoundIcon',
        'CurrencyRupeeIcon',
        'CurrencyYenIcon',
        'CursorArrowRaysIcon',
        'CursorArrowRippleIcon',
        'DevicePhoneMobileIcon',
        'DeviceTabletIcon',
        'DivideIcon',
        'DocumentArrowDownIcon',
        'DocumentArrowUpIcon',
        'DocumentChartBarIcon',
        'DocumentCheckIcon',
        'DocumentCurrencyBangladeshiIcon',
        'DocumentCurrencyDollarIcon',
        'DocumentCurrencyEuroIcon',
        'DocumentCurrencyPoundIcon',
        'DocumentCurrencyRupeeIcon',
        'DocumentCurrencyYenIcon',
        'DocumentDuplicateIcon',
        'DocumentMagnifyingGlassIcon',
        'DocumentMinusIcon',
        'DocumentPlusIcon',
        'DocumentTextIcon',
        'DocumentIcon',
        'EllipsisHorizontalCircleIcon',
        'EllipsisHorizontalIcon',
        'EllipsisVerticalIcon',
        'EnvelopeOpenIcon',
        'EnvelopeIcon',
        'EqualsIcon',
        'ExclamationCircleIcon',
        'ExclamationTriangleIcon',
        'EyeDropperIcon',
        'EyeSlashIcon',
        'EyeIcon',
        'FaceFrownIcon',
        'FaceSmileIcon',
        'FilmIcon',
        'FingerPrintIcon',
        'FireIcon',
        'FlagIcon',
        'FolderArrowDownIcon',
        'FolderMinusIcon',
        'FolderOpenIcon',
        'FolderPlusIcon',
        'FolderIcon',
        'ForwardIcon',
        'FunnelIcon',
        'GifIcon',
        'GiftTopIcon',
        'GiftIcon',
        'GlobeAltIcon',
        'GlobeAmericasIcon',
        'GlobeAsiaAustraliaIcon',
        'GlobeEuropeAfricaIcon',
        'H1Icon',
        'H2Icon',
        'H3Icon',
        'HandRaisedIcon',
        'HandThumbDownIcon',
        'HandThumbUpIcon',
        'HashtagIcon',
        'HeartIcon',
        'HomeModernIcon',
        'HomeIcon',
        'IdentificationIcon',
        'InboxArrowDownIcon',
        'InboxStackIcon',
        'InboxIcon',
        'InformationCircleIcon',
        'ItalicIcon',
        'KeyIcon',
        'LanguageIcon',
        'LifebuoyIcon',
        'LightBulbIcon',
        'LinkSlashIcon',
        'LinkIcon',
        'ListBulletIcon',
        'LockClosedIcon',
        'LockOpenIcon',
        'MagnifyingGlassCircleIcon',
        'MagnifyingGlassMinusIcon',
        'MagnifyingGlassPlusIcon',
        'MagnifyingGlassIcon',
        'MapPinIcon',
        'MapIcon',
        'MegaphoneIcon',
        'MicrophoneIcon',
        'MinusCircleIcon',
        'MinusSmallIcon',
        'MinusIcon',
        'MoonIcon',
        'MusicalNoteIcon',
        'NewspaperIcon',
        'NoSymbolIcon',
        'NumberedListIcon',
        'PaintBrushIcon',
        'PaperAirplaneIcon',
        'PaperClipIcon',
        'PauseCircleIcon',
        'PauseIcon',
        'PencilSquareIcon',
        'PencilIcon',
        'PercentBadgeIcon',
        'PhoneArrowDownLeftIcon',
        'PhoneArrowUpRightIcon',
        'PhoneXMarkIcon',
        'PhoneIcon',
        'PhotoIcon',
        'PlayCircleIcon',
        'PlayPauseIcon',
        'PlayIcon',
        'PlusCircleIcon',
        'PlusSmallIcon',
        'PlusIcon',
        'PowerIcon',
        'PresentationChartBarIcon',
        'PresentationChartLineIcon',
        'PrinterIcon',
        'PuzzlePieceIcon',
        'QrCodeIcon',
        'QuestionMarkCircleIcon',
        'QueueListIcon',
        'RadioIcon',
        'ReceiptPercentIcon',
        'ReceiptRefundIcon',
        'RectangleGroupIcon',
        'RectangleStackIcon',
        'RocketLaunchIcon',
        'RssIcon',
        'ScaleIcon',
        'ScissorsIcon',
        'ServerStackIcon',
        'ServerIcon',
        'ShareIcon',
        'ShieldCheckIcon',
        'ShieldExclamationIcon',
        'ShoppingBagIcon',
        'ShoppingCartIcon',
        'SignalSlashIcon',
        'SignalIcon',
        'SlashIcon',
        'SparklesIcon',
        'SpeakerWaveIcon',
        'SpeakerXMarkIcon',
        'Square2StackIcon',
        'Square3Stack3DIcon',
        'Squares2X2Icon',
        'SquaresPlusIcon',
        'StarIcon',
        'StopCircleIcon',
        'StopIcon',
        'StrikethroughIcon',
        'SunIcon',
        'SwatchIcon',
        'TableCellsIcon',
        'TagIcon',
        'TicketIcon',
        'TrashIcon',
        'TrophyIcon',
        'TruckIcon',
        'TvIcon',
        'UnderlineIcon',
        'UserCircleIcon',
        'UserGroupIcon',
        'UserMinusIcon',
        'UserPlusIcon',
        'UserIcon',
        'UsersIcon',
        'VariableIcon',
        'VideoCameraSlashIcon',
        'VideoCameraIcon',
        'ViewColumnsIcon',
        'ViewfinderCircleIcon',
        'WalletIcon',
        'WifiIcon',
        'WindowIcon',
        'WrenchScrewdriverIcon',
        'WrenchIcon',
        'XCircleIcon',
        'XMarkIcon'
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
    authorImage: Attribute.Media<'images'>;
    bodyContentSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    bodyContentLineSpacing: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
  };
}

export interface AppracadabraComponentsCustomizeDescription
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_customize_descriptions';
  info: {
    displayName: 'Customize-Description';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
    fontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    lineSpacing: Attribute.Enumeration<
      [
        'tracking-tighter\t',
        'tracking-tight',
        'tracking-normal',
        'tracking-wide',
        'tracking-wider',
        'tracking-widest'
      ]
    >;
  };
}

export interface AppracadabraComponentsCustomizeButton
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_customize_buttons';
  info: {
    displayName: 'Customize-Button';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    size: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    href: Attribute.String;
  };
}

export interface AppracadabraComponentsCtAsection extends Schema.Component {
  collectionName: 'components_appracadabra_components_ct_asections';
  info: {
    displayName: 'CTAsection';
    description: '';
  };
  attributes: {
    Heading: Attribute.Component<'appracadabra-components.blog-page-title'>;
    Description: Attribute.Component<'appracadabra-components.customize-description'>;
    Button: Attribute.Component<'appracadabra-components.customize-button'>;
  };
}

export interface AppracadabraComponentsBlogPageTitle extends Schema.Component {
  collectionName: 'components_appracadabra_components_blog_page_titles';
  info: {
    displayName: 'Blog-Page-Title';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    size: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    tag: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6']>;
  };
}

export interface AppracadabraComponentsBlogPageSubscriptionSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_blog_page_subscription_sections';
  info: {
    displayName: 'Blog-Page-Subscription-Section';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'appracadabra-components.blog-page-title'>;
    image: Attribute.Media<'images'>;
    imageAlt: Attribute.String;
    DescriptionSection: Attribute.Component<'appracadabra-components.customize-description'>;
    Button: Attribute.Component<'appracadabra-components.customize-button'>;
  };
}

export interface AppracadabraComponentsBlogPageListingContent
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_blog_page_listing_contents';
  info: {
    displayName: 'Blog-Page-listingContent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Content: Attribute.Text;
    titleFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    ContentFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
  };
}

export interface AppracadabraComponentsBlogPageFeedSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_blog_page_feed_sections';
  info: {
    displayName: 'Blog-Page-Feed-Section';
    description: '';
  };
  attributes: {
    section: Attribute.String;
    sectionName: Attribute.String;
    Title: Attribute.Component<'appracadabra-components.blog-page-title'>;
    image: Attribute.Media<'images'>;
    imageCaption: Attribute.String;
    lead: Attribute.Text;
    paragraph: Attribute.Text;
    ListingContent: Attribute.Component<
      'appracadabra-components.blog-page-listing-content',
      true
    >;
    paragraphFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    leadFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
    imageCaptionFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
  };
}

export interface AppracadabraComponentsBlogPageContentSection
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_blog_page_content_sections';
  info: {
    displayName: 'Blog-page-ContentSection';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'appracadabra-components.blog-page-title'>;
    description: Attribute.Text;
    descriptionFontSize: Attribute.Enumeration<
      [
        'text-xs',
        'text-sm',
        'text-base',
        'text-lg',
        'text-xl',
        'text-2xl',
        'text-3xl',
        'text-4xl',
        'text-5xl',
        'text-6xl',
        'text-7xl',
        'text-8xl',
        'text-9xl'
      ]
    >;
  };
}

export interface AppracadabraComponentsBlogCategoryPageFeatureBlog
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_blog_category_page_feature_blogs';
  info: {
    displayName: 'Blog-Category-Page-Feature-Blog';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'appracadabra-components.blog-page-title'>;
    DescriptionSection: Attribute.Component<'appracadabra-components.customize-description'>;
  };
}

export interface AppracadabraComponentsBlogCategoryPageCta
  extends Schema.Component {
  collectionName: 'components_appracadabra_components_blog_category_page_ctas';
  info: {
    displayName: 'Blog-Category-Page-CTA';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'appracadabra-components.blog-page-title'>;
    DescriptionSection: Attribute.Component<'appracadabra-components.customize-description'>;
    ButtonSection: Attribute.Component<'appracadabra-components.customize-button'>;
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
      'appracadabra-components.meta-data': AppracadabraComponentsMetaData;
      'appracadabra-components.landing-page-why-us': AppracadabraComponentsLandingPageWhyUs;
      'appracadabra-components.landing-page-why-us-feature-list': AppracadabraComponentsLandingPageWhyUsFeatureList;
      'appracadabra-components.landing-page-testimonials': AppracadabraComponentsLandingPageTestimonials;
      'appracadabra-components.landing-page-princing-content': AppracadabraComponentsLandingPagePrincingContent;
      'appracadabra-components.landing-page-pricing-tiers': AppracadabraComponentsLandingPagePricingTiers;
      'appracadabra-components.landing-page-pricing-main-feature': AppracadabraComponentsLandingPagePricingMainFeature;
      'appracadabra-components.landing-page-pricing-frequencies': AppracadabraComponentsLandingPagePricingFrequencies;
      'appracadabra-components.landing-page-hero-section': AppracadabraComponentsLandingPageHeroSection;
      'appracadabra-components.landing-page-feature': AppracadabraComponentsLandingPageFeature;
      'appracadabra-components.landing-page-feature-list': AppracadabraComponentsLandingPageFeatureList;
      'appracadabra-components.landing-page-faq': AppracadabraComponentsLandingPageFaq;
      'appracadabra-components.landing-page-faq-lists': AppracadabraComponentsLandingPageFaqLists;
      'appracadabra-components.landing-page-cta': AppracadabraComponentsLandingPageCta;
      'appracadabra-components.image': AppracadabraComponentsImage;
      'appracadabra-components.hero-section': AppracadabraComponentsHeroSection;
      'appracadabra-components.heading': AppracadabraComponentsHeading;
      'appracadabra-components.header': AppracadabraComponentsHeader;
      'appracadabra-components.header-image-section': AppracadabraComponentsHeaderImageSection;
      'appracadabra-components.footer-section': AppracadabraComponentsFooterSection;
      'appracadabra-components.footer-navigation-list': AppracadabraComponentsFooterNavigationList;
      'appracadabra-components.flyout-menu': AppracadabraComponentsFlyoutMenu;
      'appracadabra-components.feature-testimonial-section': AppracadabraComponentsFeatureTestimonialSection;
      'appracadabra-components.customize-description': AppracadabraComponentsCustomizeDescription;
      'appracadabra-components.customize-button': AppracadabraComponentsCustomizeButton;
      'appracadabra-components.ct-asection': AppracadabraComponentsCtAsection;
      'appracadabra-components.blog-page-title': AppracadabraComponentsBlogPageTitle;
      'appracadabra-components.blog-page-subscription-section': AppracadabraComponentsBlogPageSubscriptionSection;
      'appracadabra-components.blog-page-listing-content': AppracadabraComponentsBlogPageListingContent;
      'appracadabra-components.blog-page-feed-section': AppracadabraComponentsBlogPageFeedSection;
      'appracadabra-components.blog-page-content-section': AppracadabraComponentsBlogPageContentSection;
      'appracadabra-components.blog-category-page-feature-blog': AppracadabraComponentsBlogCategoryPageFeatureBlog;
      'appracadabra-components.blog-category-page-cta': AppracadabraComponentsBlogCategoryPageCta;
    }
  }
}
