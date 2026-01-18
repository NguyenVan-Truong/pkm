# Enterprise Solutions - Website Giới thiệu Giải pháp Phần mềm Doanh nghiệp

## Mô tả dự án

Website giới thiệu giải pháp phần mềm doanh nghiệp được xây dựng với Next.js 14, Tailwind CSS và tối ưu SEO. Website bao gồm đầy đủ các section theo yêu cầu từ README.md và được thiết kế responsive, hiện đại.

## Tính năng chính

### 🎨 Giao diện người dùng
- **Header**: Logo công ty, thanh điều hướng, nút CTA
- **Hero Section**: Banner chính với hình ảnh, tiêu đề lớn, mô tả và nút CTA
- **Giới thiệu tổng quan**: Mô tả về phần mềm doanh nghiệp toàn diện
- **Các nhóm giải pháp**: 6 nhóm giải pháp chính với icon và mô tả
- **Nền tảng công nghệ**: Giới thiệu về AI, dữ liệu và ứng dụng
- **Quản lý bền vững & Mạng lưới**: Hai phần riêng biệt với thống kê
- **Sự kiện & Tin tức**: Danh sách sự kiện và tin tức mới nhất
- **Đối tác và cộng đồng**: Logo đối tác và các loại hình đối tác
- **Call-to-Action cuối trang**: Kêu gọi hành động mạnh mẽ
- **Footer**: Thông tin liên hệ, link nhanh, mạng xã hội

### 🚀 Công nghệ sử dụng
- **Next.js 14**: Framework React với App Router
- **TypeScript**: Type safety và developer experience tốt hơn
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library hiện đại
- **Responsive Design**: Tối ưu cho mọi thiết bị

### 🔍 Tối ưu SEO
- **Metadata đầy đủ**: Title, description, keywords, Open Graph, Twitter Card
- **Structured Data**: JSON-LD cho Organization schema
- **Semantic HTML**: Sử dụng các thẻ HTML có ý nghĩa
- **Performance**: Tối ưu hình ảnh và loading
- **Accessibility**: Tuân thủ các tiêu chuẩn accessibility

## Cấu trúc thư mục

```
├── app/
│   ├── globals.css          # Global styles với Tailwind
│   ├── layout.tsx          # Root layout với metadata SEO
│   └── page.tsx            # Trang chủ
├── components/
│   ├── Header.tsx          # Header với navigation
│   ├── HeroSection.tsx     # Banner chính
│   ├── AboutSection.tsx    # Giới thiệu và giải pháp
│   ├── TechnologyPlatform.tsx # Nền tảng công nghệ
│   ├── SustainabilityNetwork.tsx # Bền vững & mạng lưới
│   ├── EventsNews.tsx       # Sự kiện & tin tức
│   ├── PartnersCommunity.tsx # Đối tác & cộng đồng
│   ├── FinalCTA.tsx        # Call-to-action cuối trang
│   └── Footer.tsx          # Footer
├── public/
│   └── site.webmanifest    # PWA manifest
├── package.json
├── next.config.js
├── tailwind.config.ts
└── README.md
```

## Cài đặt và chạy dự án

### Yêu cầu hệ thống
- Node.js 18+ 
- npm hoặc yarn

### Cài đặt dependencies
```bash
npm install
# hoặc
yarn install
```

### Chạy development server
```bash
npm run dev
# hoặc
yarn dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build cho production
```bash
npm run build
npm start
# hoặc
yarn build
yarn start
```

## Tùy chỉnh

### Thay đổi màu sắc
Chỉnh sửa file `tailwind.config.ts` để thay đổi color palette:

```typescript
colors: {
  primary: {
    // Thay đổi các giá trị màu primary
  }
}
```

### Thêm nội dung
- **Sự kiện**: Chỉnh sửa array `events` trong `EventsNews.tsx`
- **Tin tức**: Chỉnh sửa array `news` trong `EventsNews.tsx`
- **Đối tác**: Chỉnh sửa array `partners` trong `PartnersCommunity.tsx`
- **Thông tin liên hệ**: Cập nhật trong `Footer.tsx` và `FinalCTA.tsx`

### SEO
- Cập nhật metadata trong `app/layout.tsx`
- Thêm structured data cho các section cụ thể
- Tối ưu hình ảnh và alt text

## Performance

Website được tối ưu với:
- **Image Optimization**: Sử dụng Next.js Image component
- **Code Splitting**: Automatic code splitting của Next.js
- **CSS Optimization**: Tailwind CSS với purging
- **Lazy Loading**: Lazy loading cho các component

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Xem file LICENSE để biết thêm chi tiết.

## Liên hệ

- **Email**: info@enterprise-solutions.com
- **Phone**: +84 28 1234 5678
- **Website**: https://enterprise-solutions.com