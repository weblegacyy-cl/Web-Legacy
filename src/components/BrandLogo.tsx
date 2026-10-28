/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'mark';
}

const FULL_LOGO = '/images/web_legacy_logo_white_transparent.png';
const MARK_LOGO = '/images/web_legacy_mark_white_transparent.png';

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const src = variant === 'mark' ? MARK_LOGO : FULL_LOGO;

  const sizeClasses = {
    sm: variant === 'mark' ? 'h-8 sm:h-9 w-auto' : 'h-8 sm:h-9 w-auto',
    md: variant === 'mark' ? 'h-10 sm:h-11 w-auto' : 'h-11 sm:h-12 w-auto',
    lg: variant === 'mark' ? 'h-16 sm:h-20 w-auto' : 'h-16 sm:h-20 w-auto',
    xl: variant === 'mark' ? 'h-24 sm:h-32 w-auto' : 'h-28 sm:h-36 w-auto',
  }[size];

  return (
    <img
      src={src}
      alt="Web Legacy Logo"
      className={`object-contain transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.25)] ${sizeClasses} ${className}`}
    />
  );
};
