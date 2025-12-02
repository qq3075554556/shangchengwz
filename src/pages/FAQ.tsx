import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

const FAQ = () => {
  const { language } = useLanguage();

  const faqs = [
    {
      question: language === 'zh' ? '源码、白标、定制开发有什么区别？' : 'What is the difference between source code, white label, and custom development?',
      answer: language === 'zh' 
        ? '源码：指VPN软件的源代码，需要你具备一定的开发能力才能使用。\n\n白标：指VPN软件已经开发好了，你只需要更换品牌名称、logo等即可使用，无需开发能力。\n\n定制开发：指根据你的需求，定制开发VPN软件，需要你提供详细的需求文档。'
        : 'Source Code: Refers to the source code of VPN software, requires certain development capabilities to use.\n\nWhite Label: Refers to ready-made VPN software, you only need to change brand name, logo, etc. to use, no development capability required.\n\nCustom Development: Refers to developing VPN software according to your requirements, you need to provide detailed requirement documents.'
    },
    {
      question: language === 'zh' ? '购买源码后，可以商用吗？' : 'Can I use the source code commercially after purchase?',
      answer: language === 'zh'
        ? '可以的，购买源码后，您可以自由使用，包括商用。但是，您不能将源码转售给第三方。'
        : 'Yes, after purchasing the source code, you can use it freely, including commercial use. However, you cannot resell the source code to third parties.'
    },
    {
      question: language === 'zh' ? '购买白标后，可以修改源码吗？' : 'Can I modify the source code after purchasing white label?',
      answer: language === 'zh'
        ? '可以的，购买白标后，您可以修改源码，但是我们建议您在修改源码前，先咨询我们的技术人员，以免影响软件的正常使用。'
        : 'Yes, after purchasing white label, you can modify the source code, but we recommend consulting our technical staff before modifying the source code to avoid affecting the normal use of the software.'
    },
    {
      question: language === 'zh' ? '购买白标后，可以上架应用商店吗？' : 'Can I list on app stores after purchasing white label?',
      answer: language === 'zh'
        ? '可以的，购买白标后，您可以自行上架应用商店，我们也提供上架服务，具体请咨询客服。'
        : 'Yes, after purchasing white label, you can list on app stores yourself. We also provide listing services, please consult customer service for details.'
    },
    {
      question: language === 'zh' ? '购买定制开发，需要多长时间？' : 'How long does custom development take?',
      answer: language === 'zh'
        ? '定制开发的时间取决于您的需求，一般情况下，简单的定制开发需要1-2周，复杂的定制开发需要1-2个月。'
        : 'The time for custom development depends on your requirements. Generally, simple custom development takes 1-2 weeks, and complex custom development takes 1-2 months.'
    },
    {
      question: language === 'zh' ? '购买源码/白标后，提供技术支持吗？' : 'Do you provide technical support after purchasing source code/white label?',
      answer: language === 'zh'
        ? '是的，我们提供免费的技术支持，包括软件安装、配置、使用等方面的问题。白标用户享受1年免费技术支持，源码用户享受3个月免费技术支持。'
        : 'Yes, we provide free technical support, including software installation, configuration, usage and other issues. White label users enjoy 1 year of free technical support, and source code users enjoy 3 months of free technical support.'
    },
    {
      question: language === 'zh' ? '购买后，可以退款吗？' : 'Can I get a refund after purchase?',
      answer: language === 'zh'
        ? '由于软件的特殊性，一旦交付源码或白标，我们不提供退款服务。所以，在购买前，请确保您已经了解清楚产品的功能和使用方法。如有疑问，请先咨询客服。'
        : 'Due to the special nature of software, once the source code or white label is delivered, we do not provide refund services. Therefore, before purchasing, please make sure you have clearly understood the functions and usage of the product. If you have any questions, please consult customer service first.'
    },
    {
      question: language === 'zh' ? '支持哪些支付方式？' : 'What payment methods are supported?',
      answer: language === 'zh'
        ? '我们支持USDT支付，也支持支付宝、微信、银行转账等支付方式。具体请咨询客服。'
        : 'We support USDT payment, as well as Alipay, WeChat, bank transfer and other payment methods. Please consult customer service for details.'
    },
    {
      question: language === 'zh' ? '购买源码后，可以获得哪些文件？' : 'What files can I get after purchasing source code?',
      answer: language === 'zh'
        ? '购买源码后，您将获得完整的源代码文件、编译文档、部署文档、使用文档等。'
        : 'After purchasing the source code, you will receive complete source code files, compilation documents, deployment documents, usage documents, etc.'
    },
    {
      question: language === 'zh' ? 'VPN节点服务包括什么？' : 'What does VPN node service include?',
      answer: language === 'zh'
        ? 'VPN节点服务包括：节点配置、节点维护、节点监控、节点优化等。我们提供全球多个地区的节点，您可以根据需要选择。'
        : 'VPN node service includes: node configuration, node maintenance, node monitoring, node optimization, etc. We provide nodes in multiple regions worldwide, and you can choose according to your needs.'
    },
    {
      question: language === 'zh' ? '收款服务如何收费？' : 'How is the payment collection service charged?',
      answer: language === 'zh'
        ? '收款服务的收费方式有两种：1. 按照交易额收取一定比例的手续费；2. 按照技术配置收取固定费用。具体请咨询客服。白标用户可免费接入代收款服务。'
        : 'There are two ways to charge for payment collection service: 1. Charge a certain percentage of transaction fee; 2. Charge a fixed fee according to technical configuration. Please consult customer service for details. White label users can access the payment collection service for free.'
    },
    {
      question: language === 'zh' ? '如何联系客服？' : 'How to contact customer service?',
      answer: language === 'zh'
        ? '您可以通过Telegram联系我们的客服：@gaoshengsm'
        : 'You can contact our customer service via Telegram: @gaoshengsm'
    }
  ];

  return (
    <>
      <Breadcrumbs />
      <div className="min-h-screen pt-4 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            {language === 'zh' ? '常见问答' : 'FAQ'}
          </h1>
          <p className="text-xl text-muted-foreground">
            {language === 'zh' 
              ? '关于VPN开发服务的常见问题解答'
              : 'Frequently asked questions about VPN development services'}
          </p>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-2xl">
              {language === 'zh' ? '常见问题' : 'Common Questions'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default FAQ;
