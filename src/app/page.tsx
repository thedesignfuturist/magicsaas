"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";
import { Check, Shield, Globe, MessageSquare, Heart, ArrowRight, Sparkles } from "lucide-react";
import { MorphingText } from "@/components/magicui/morphing-text";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { TextAnimate } from "@/components/magicui/text-animate";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { useState } from "react";
import { Zap, Users } from "lucide-react";

const reviews = [
  {
    name: "김민수",
    username: "@kimminsoo",
    body: "Magic SaaS 덕분에 우리 팀의 생산성이 300% 향상되었습니다. 복잡한 개발 과정 없이 바로 서비스를 런칭할 수 있어서 정말 놀랍습니다.",
    img: "https://avatar.vercel.sh/kimminsoo",
  },
  {
    name: "이지영",
    username: "@leejy",
    body: "AI 자동화 기능이 정말 대단합니다. 고객 응대 시간이 80% 단축되었고, 팀원들이 더 중요한 업무에 집중할 수 있게 되었어요.",
    img: "https://avatar.vercel.sh/leejy",
  },
  {
    name: "박준호",
    username: "@parkjh",
    body: "보안과 성능 모두 완벽합니다. 엔터프라이즈 고객들도 안심하고 사용할 수 있는 수준의 서비스라고 생각합니다.",
    img: "https://avatar.vercel.sh/parkjh",
  },
  {
    name: "최지은",
    username: "@choije",
    body: "드래그 앤 드롭으로 웹사이트를 만드는 것이 이렇게 쉬울 수 있다니! 개발자도 아닌데 전문적인 서비스를 만들 수 있어요.",
    img: "https://avatar.vercel.sh/choije",
  },
  {
    name: "정현우",
    username: "@junghw",
    body: "24/7 고객 지원이 정말 도움이 됩니다. 문제가 생기면 즉시 해결해주셔서 비즈니스 운영에 전혀 지장이 없어요.",
    img: "https://avatar.vercel.sh/junghw",
  },
  {
    name: "한소영",
    username: "@hansy",
    body: "가격 대비 성능이 정말 좋습니다. 다른 서비스들보다 훨씬 합리적이고 기능도 풍부해요.",
    img: "https://avatar.vercel.sh/hansy",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => (
  <figure
    className={cn(
      "w-64 h-auto flex-shrink-0 rounded-xl border p-4 bg-background shadow-sm flex flex-col justify-between",
    )}
  >
    <div className="flex flex-row items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt="" src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium">{name}</figcaption>
        <p className="text-xs text-muted-foreground">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm break-words">{body}</blockquote>
  </figure>
);

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 가격 플랜 데이터
  const pricingData = {
    monthly: [
      { name: "Starter", price: 29000, label: "₩29,000", sub: "개인 및 소규모 팀을 위한 플랜", origin: undefined },
      { name: "Professional", price: 99000, label: "₩99,000", sub: "성장하는 비즈니스를 위한 플랜", origin: undefined },
      { name: "Enterprise", price: 0, label: "문의", sub: "대규모 조직을 위한 맞춤형 플랜", origin: undefined },
    ],
    yearly: [
      { name: "Starter", price: 27800, label: "₩27,800", origin: 29000, sub: "개인 및 소규모 팀을 위한 플랜" },
      { name: "Professional", price: 94800, label: "₩94,800", origin: 99000, sub: "성장하는 비즈니스를 위한 플랜" },
      { name: "Enterprise", price: 0, label: "문의", sub: "대규모 조직을 위한 맞춤형 플랜", origin: undefined },
    ],
  };
  const [period, setPeriod] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-primary" />
                <h1 className="text-xl font-bold text-primary">Magic SaaS</h1>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="text-sm hover:text-primary transition-colors">
                기능
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-sm hover:text-primary transition-colors">
                후기
              </button>
              <button onClick={() => scrollToSection('team')} className="text-sm hover:text-primary transition-colors">
                팀
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">
                가격
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-sm hover:text-primary transition-colors">
                FAQ
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">로그인</Button>
              <Button size="sm" className="gap-2">
                14일 무료체험
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Hero 배경 도트 패턴 - DotPattern 적용 */}
        <div
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            maskImage: "radial-gradient(circle at 50% 50%, white, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 50%, white, transparent 80%)",
            opacity: 0.7,
          }}
        >
          <DotPattern
            width={24}
            height={24}
            cr={1.5}
            className="text-neutral-400/80"
            glow={true}
          />
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
            <Sparkles className="h-3 w-3 mr-1" />
            지금 바로 시작하세요
          </Badge>
          <div className="mb-6">
            <MorphingText
              texts={["Build SaaS Fast", "No Code Needed", "AI-Powered Platform", "Launch Instantly"]}
              className="text-4xl sm:text-6xl font-bold tracking-tight max-w-4xl mx-auto"
            />
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            개발 지식 없이, 클릭 몇 번으로 나만의 서비스를 만들어보세요.<br />
            AI가 도와주는 자동화로 비즈니스를 성장시키세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 gap-2">
              무료로 시작하기
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>14일 무료 체험</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>신용카드 불필요</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>언제든지 취소</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              강력한 기능
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              비즈니스를 성장시키는 핵심 기능
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              개발부터 배포까지, 모든 과정을 자동화하여 비즈니스에만 집중할 수 있도록 도와드립니다.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>초고속 배포</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  버튼 한 번으로 SaaS를 전 세계에 배포하세요. 
                  CDN과 자동 스케일링으로 언제나 빠른 속도를 보장합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>AI 자동화</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  AI가 반복 업무를 자동으로 처리해줍니다. 
                  고객 응대부터 데이터 분석까지 모든 것을 자동화하세요.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>팀 협업 최적화</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  실시간 협업과 피드백으로 생산성을 극대화하세요. 
                  팀원들과 원활하게 소통하고 프로젝트를 관리하세요.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>엔터프라이즈 보안</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  SOC 2, GDPR, ISO 27001 인증을 받은 엔터프라이즈급 보안으로 
                  데이터를 안전하게 보호합니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>글로벌 인프라</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  전 세계 50개 이상의 데이터 센터에서 서비스를 제공합니다. 
                  어디서든 빠른 속도로 접근할 수 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col justify-between">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>24/7 고객 지원</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground">
                  전문가 팀이 24시간 7일 내내 대기하고 있습니다. 
                  언제든지 도움이 필요하시면 연락주세요.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              고객 후기
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              실제 사용자들의 생생한 후기
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Magic SaaS를 사용하는 고객들의 실제 경험을 들어보세요.
            </p>
          </div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-8">
            <Marquee pauseOnHover className="w-full max-w-4xl gap-6">
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="w-full max-w-4xl gap-6">
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              우리 팀
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              혁신을 이끄는 전문가들
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              각 분야의 전문가들이 모여 Magic SaaS를 만들어갑니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-sm text-center hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <Avatar className="h-20 w-20 mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <AvatarImage src="/api/placeholder/80/80" />
                  <AvatarFallback>CEO</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-1">김철수</h3>
                <p className="text-sm text-muted-foreground mb-2">CEO & Founder</p>
                <p className="text-xs text-muted-foreground">
                  구글, 아마존에서 10년간 근무한 경험을 바탕으로 
                  혁신적인 SaaS 플랫폼을 만들고 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <Avatar className="h-20 w-20 mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <AvatarImage src="/api/placeholder/80/80" />
                  <AvatarFallback>CTO</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-1">이영희</h3>
                <p className="text-sm text-muted-foreground mb-2">CTO</p>
                <p className="text-xs text-muted-foreground">
                  AI/ML 전문가로, 스탠포드 대학에서 박사 학위를 받고 
                  최신 기술을 Magic SaaS에 적용하고 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <Avatar className="h-20 w-20 mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <AvatarImage src="/api/placeholder/80/80" />
                  <AvatarFallback>CPO</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-1">박민수</h3>
                <p className="text-sm text-muted-foreground mb-2">CPO</p>
                <p className="text-xs text-muted-foreground">
                  사용자 경험 전문가로, 직관적이고 아름다운 
                  인터페이스를 설계하고 있습니다.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm text-center hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-6">
                <Avatar className="h-20 w-20 mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <AvatarImage src="/api/placeholder/80/80" />
                  <AvatarFallback>CMO</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold mb-1">최지은</h3>
                <p className="text-sm text-muted-foreground mb-2">CMO</p>
                <p className="text-xs text-muted-foreground">
                  마케팅 전략가로, 브랜드 성장과 고객 확보를 
                  담당하고 있습니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">가격 플랜</Badge>
          </div>
          <div className="mb-4 text-center">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">가격 플랜</h2>
            <p className="text-lg text-muted-foreground mb-8">비즈니스 규모에 맞는 플랜을 선택하세요</p>
          </div>
          <div className="flex justify-center items-center mb-10 gap-0">
            <button
              className={`px-6 py-2 text-sm font-medium rounded-l-lg transition-colors duration-200 focus:outline-none border border-zinc-200 dark:border-zinc-800 ${period === 'monthly' ? 'bg-primary text-primary-foreground' : 'bg-transparent text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
              onClick={() => setPeriod('monthly')}
              aria-pressed={period === 'monthly'}
              style={{ transition: 'background 0.2s, color 0.2s' }}
            >
              월간
            </button>
            <button
              className={`px-6 py-2 text-sm font-medium rounded-r-lg transition-colors duration-200 focus:outline-none border-t border-b border-r border-zinc-200 dark:border-zinc-800 -ml-px flex items-center gap-2 ${period === 'yearly' ? 'bg-primary text-primary-foreground' : 'bg-transparent text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'}`}
              onClick={() => setPeriod('yearly')}
              aria-pressed={period === 'yearly'}
              style={{ transition: 'background 0.2s, color 0.2s' }}
            >
              연간
              <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full select-none whitespace-nowrap border border-[#5FF8C1] text-[#1A3C34] bg-[#5FF8C1]/20" style={{color:'#1A3C34', background:'#5FF8C133', borderColor:'#5FF8C1'}}>20% 할인</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData[period].map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-8 pt-8 pb-6 shadow-sm transition-all duration-300 ${plan.name === 'Professional' ? 'ring-2 ring-primary/80 ring-offset-2 ring-offset-background bg-white dark:bg-zinc-900' : ''}`}
              >
                {plan.name === 'Professional' && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground shadow">가장 인기</span>
                )}
                <div className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">{plan.name === 'Starter' ? '스타터' : plan.name === 'Professional' ? '프로' : '엔터프라이즈'}</div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-bold tracking-tight transition-all duration-300">{plan.price > 0 ? `₩${plan.price.toLocaleString()}` : '문의'}</span>
                  {plan.price > 0 && <span className="text-base text-zinc-500">/월</span>}
                </div>
                <hr className="my-4 border-zinc-200 dark:border-zinc-800" />
                <div className="mb-4">
                  <div className="text-xs font-semibold text-zinc-500 mb-2">포함 내용</div>
                  <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
                    {plan.name === 'Starter' && (
                      <>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />최대 5명의 팀원</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />기본 AI 기능</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />10GB 저장공간</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />이메일 지원</li>
                      </>
                    )}
                    {plan.name === 'Professional' && (
                      <>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />무제한 팀원</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />고급 AI 기능</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />100GB 저장공간</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />우선 지원</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />고급 분석</li>
                      </>
                    )}
                    {plan.name === 'Enterprise' && (
                      <>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />모든 기능 포함</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />전용 서버</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />SLA 보장</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />전담 매니저</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />맞춤형 통합</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="mt-auto flex gap-2">
                  {plan.name === 'Starter' && (
                    <Button variant="outline" className="w-full">14일 무료체험</Button>
                  )}
                  {plan.name === 'Professional' && (
                    <Button className="w-full bg-primary text-primary-foreground font-semibold shadow hover:bg-primary/90 transition-all">14일 무료체험</Button>
                  )}
                  {plan.name === 'Enterprise' && (
                    <Button className="w-full" variant="outline">문의하기</Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll-based Velocity Demo Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <VelocityScroll numRows={2} defaultVelocity={2} className="text-zinc-400 md:text-zinc-500 md:opacity-80">
              Scroll-based velocity effect with Magic UI ✦ 빠르고 다이내믹한 SaaS 경험을 만나보세요!
            </VelocityScroll>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="text-center mb-16 w-full">
            <Badge className="mb-4 px-3 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              자주 묻는 질문
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              궁금한 점을 확인해보세요
            </h2>
            <p className="text-lg text-muted-foreground">
              Magic SaaS에 대해 궁금한 점들을 확인해보세요.
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="mb-2 rounded-xl bg-zinc-50">
              <AccordionTrigger className="text-left p-6 rounded-xl bg-zinc-50">
                Magic SaaS는 어떤 기술 스택을 사용하나요?
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-zinc-50 rounded-b-xl">
                Magic SaaS는 최신 웹 기술을 기반으로 구축되었습니다. 
                React, Next.js, TypeScript를 프론트엔드로 사용하고, 
                Node.js와 PostgreSQL을 백엔드로 활용합니다. 
                AI 기능은 OpenAI와 Google의 최신 모델을 통합하여 제공합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="mb-2 rounded-xl bg-zinc-50">
              <AccordionTrigger className="text-left p-6 rounded-xl bg-zinc-50">
                개발 지식이 없어도 사용할 수 있나요?
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-zinc-50 rounded-b-xl">
                네, 전혀 문제없습니다! Magic SaaS는 드래그 앤 드롭 방식의 
                직관적인 인터페이스를 제공하여 코딩 지식 없이도 
                전문적인 SaaS 서비스를 만들 수 있습니다. 
                AI가 자동으로 최적의 코드를 생성해드립니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="mb-2 rounded-xl bg-zinc-50">
              <AccordionTrigger className="text-left p-6 rounded-xl bg-zinc-50">
                데이터 보안은 어떻게 보장되나요?
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-zinc-50 rounded-b-xl">
                Magic SaaS는 엔터프라이즈급 보안을 제공합니다. 
                SOC 2, GDPR, ISO 27001 인증을 받았으며, 
                모든 데이터는 AES-256 암호화로 보호됩니다. 
                정기적인 보안 감사와 침투 테스트를 실시하여 
                최고 수준의 보안을 유지합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="mb-2 rounded-xl bg-zinc-50">
              <AccordionTrigger className="text-left p-6 rounded-xl bg-zinc-50">
                무료 체험 기간이 있나요?
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-zinc-50 rounded-b-xl">
                네, 모든 플랜에 대해 14일 무료 체험을 제공합니다. 
                신용카드 정보 없이도 모든 기능을 자유롭게 사용해보실 수 있으며, 
                체험 기간이 끝나기 전에 언제든지 취소할 수 있습니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5" className="mb-2 rounded-xl bg-zinc-50">
              <AccordionTrigger className="text-left p-6 rounded-xl bg-zinc-50">
                고객 지원은 어떻게 받을 수 있나요?
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-zinc-50 rounded-b-xl">
                다양한 채널을 통해 고객 지원을 제공합니다. 
                이메일, 실시간 채팅, 전화 상담을 24시간 7일 내내 이용하실 수 있으며, 
                Professional 플랜 이상에서는 전담 매니저가 배정됩니다. 
                또한 상세한 문서와 비디오 튜토리얼도 제공합니다.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6" className="mb-2 rounded-xl bg-zinc-50">
              <AccordionTrigger className="text-left p-6 rounded-xl bg-zinc-50">
                다른 서비스와의 통합은 가능한가요?
              </AccordionTrigger>
              <AccordionContent className="p-6 bg-zinc-50 rounded-b-xl">
                네, Magic SaaS는 다양한 서비스와의 통합을 지원합니다. 
                Slack, Notion, Zapier, Salesforce 등 주요 서비스들과 
                API를 통해 연결할 수 있으며, 
                Enterprise 플랜에서는 맞춤형 통합도 제공합니다.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <div className="rounded-3xl bg-[#5FF8C1] shadow-xl px-6 py-12 sm:px-12 sm:py-16 w-full">
            <Badge className="mb-6 px-4 py-2 text-sm bg-white/20 text-black border-black/20">
              <Sparkles className="h-3 w-3 mr-1 text-black" />
              지금 시작하세요
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-black">
              비즈니스를 성장시킬 준비가 되셨나요?
            </h2>
            <p className="text-lg mb-8 opacity-90 text-black">
              Magic SaaS와 함께 비즈니스를 성장시키세요. 
              14일 무료 체험으로 모든 기능을 경험해보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Button size="lg" className="text-lg px-8 py-6 gap-2 bg-white text-[#5FF8C1] border-none hover:bg-gray-100 w-full sm:w-auto">
                14일 무료체험
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75 text-black">
              신용카드 정보 불필요 • 언제든지 취소 가능 • 24/7 고객 지원
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-8 md:gap-0">
          {/* 좌측: 브랜드/소개 (50%) */}
          <div className="flex-1 flex flex-col justify-between md:pr-12 mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-primary" />
              <h3 className="text-lg font-semibold">Magic SaaS</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              누구나 쉽게 만드는 SaaS 플랫폼
            </p>
            <p className="text-xs text-muted-foreground mt-auto">
              © {new Date().getFullYear()} Magic SaaS. 모든 권리 보유.
            </p>
          </div>
          {/* 우측: 사이트맵 (50%) */}
          <div className="flex-1 grid grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-4">제품</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">기능</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">가격</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">통합</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">회사</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">소개</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">팀</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">채용</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">뉴스</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">지원</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">도움말</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">문서</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">커뮤니티</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">연락처</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// 텍스트 애니메이션 데모 예시
export function TextAnimateDemo3() {
  return (
    <TextAnimate animation="slideUp" by="word">
      Slide up by word
    </TextAnimate>
  );
}
