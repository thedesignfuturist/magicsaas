# Magic SaaS UI 스타일 가이드

이 프로젝트의 모든 UI/스타일은 아래 규칙을 반드시 준수해야 합니다.

---

## 1. 색상(Color)
- **반드시 `src/app/globals.css`에 정의된 oklch 변수만 사용**
  - 예: `var(--primary)`, `var(--background)`, `var(--border)` 등
- HEX, rgb, hsl, tailwind 기본 색상 등 임의 색상 사용 금지
- Tailwind 사용 시: `bg-[var(--primary)]`, `text-[var(--foreground)]` 등 변수만 사용

### 금지 예시
```css
color: #ff0000;
background: rgb(0,0,0);
@apply bg-blue-500;
```

### 권장 예시
```css
color: var(--primary);
background: var(--background);
@apply bg-[var(--primary)] text-[var(--foreground)];
```

---

## 2. 폰트(Font)
- 기본 폰트는 Pretendard만 사용합니다.
- Pretendard의 font-weight는 **500, 400, 300**만 사용합니다. (bold, regular만 쓰지 않고, 300/400/500을 상황에 맞게 조합)
- 임의의 font-weight(예: 600, 700 등)는 사용하지 않습니다.
- 폰트 크기, weight, line-height 등은 반드시 CSS 변수 또는 Tailwind 프리셋만 사용합니다.
- 임의의 폰트, 구글폰트, 시스템 폰트 등 사용 금지

### 금지 예시
```css
font-family: 'Roboto', sans-serif;
@apply font-serif;
```

### 권장 예시
```css
font-family: 'Pretendard-Regular', sans-serif;
@apply font-sans;
```

---

## 3. 그림자, radius, 간격 등
- **모두 변수(`--shadow-sm`, `--radius`, `--spacing` 등)만 사용**
- 커스텀 box-shadow, border-radius, margin/padding 등 금지

### 금지 예시
```css
box-shadow: 0 4px 8px #0003;
border-radius: 8px;
```

### 권장 예시
```css
box-shadow: var(--shadow-sm);
border-radius: var(--radius);
```

---

## 4. Tailwind 사용 시
- 색상: `bg-[var(--primary)]`, `text-[var(--foreground)]` 등 변수만 사용
- 폰트: `font-sans`는 Pretendard로 매핑
- 그림자/간격: `shadow-[var(--shadow-sm)]`, `rounded-[var(--radius)]` 등 변수만 사용

---

## 5. 예외
- 폰트만 Pretendard 고정, 나머지는 변수만 사용

---

## 6. 자동화/강제화 팁
- Stylelint 플러그인으로 HEX/rgb/hsl 등 금지, 변수만 허용
- Tailwind config에서 custom color palette를 비워두고, safelist에 변수만 허용
- PR 리뷰/Storybook/Docs에 본 가이드 명시

---

## 7. 기타
- 위 규칙을 어기는 코드/스타일은 PR에서 반드시 리젝됩니다.
- 궁금한 점/예외 상황은 팀 리드와 상의 후 결정 