---
title: Digital Audio Fundamentals
toc_number: false
large: true
categories: Digital Audio
description: >-
  This video series explains the fundamentals of digital audio, how audio signals are expressed in the digital domain, how they're converted and transformed and the advantages of working with digital signals. 
abbrlink: digital-audio
date: 2022-06-24 15:20:34
updated:
tags: [Digital Audio, Audio Transformation, Audio Processing, Digital Signal Processing]
keywords:
top_img:
comments:
cover:
toc:
copyright:
copyright_author:
copyright_author_href:
copyright_url:
copyright_info:
mathjax:
katex:
aplayer:
highlight_shrink:
aside:
swiper_index:
---

The best video tutorials about Digital Audio Fundamentals on Youtube. This sophisticated series of animations were created using [Adobe After Effects](https://www.adobe.com/products/aftereffects.html) by [Akash Murthy](https://www.akashmurthy.com/) from Dublin, Ireland. Everyone who ever wonders how digital audio works should definitely watch this series. 

Find the full playlist here: https://www.youtube.com/playlist?list=PLbqhA-NKGP6B6V_AiS-jbvSzdd7nbwwCw

This video series explains the fundamentals of digital audio, how audio signals are expressed in the digital domain, how they're converted and transformed and the advantages of working with digital signals. We'll cover concepts of sampling theorem, sample rates, aliasing, bit depth, quantization, dither, pulse code modulation, sigma delta modulation, noise shaping and all that good stuff.

## 1. Signal Paths

This video series explains the fundamentals of digital audio, how audio signals are expressed in the digital domain, how they're converted and transformed and the limitations of working with digital signals. The first video in the series talks about signal paths and how audio exists in different forms.  

### Introduction

What was once an elaborate, time consuming and generally expensive discipline of engineering has seen a major shift towards digitization, which has made itself widely available to essentially everybody. 

Back when there were no computers or digital systems, analog audio signals had to be recorded onto <u>magnetic tapes</u>[^1]. Any effects or processing were electronic circuits that modified the signal, and these had to be placed beforehand in the signal chain and the effects would be irreversible once recorded. 

And if you had to edit or trim the end result, you'd have to take a pair of scissors, and carefully slice the tape reel, and reattach it by gluing it to a different section of the tape. And if you wanted to save the audio recording safely for a long time, you'd etch the analog footprint of the signal onto a <u>vinyl disk</u>[^2], for example.

### Advent of Digital Systems

With the advent of digital systems and the personal computers, engineers devised ways of converting the analog signals into a form that these systems could operate over. This proved incredibly resilient and flexible because it provided control and manipulation capabilities in ways they could never have achieved before.

It gave them fine control over every aspect of the signal, right from processing to storage. You could now record several audio signals straight into your computer, apply effects when needed, store internally into a hard drive, and come back to it the next day and press <kbd>Ctrl + v</kbd> to undo everything.

The digital world was born, but underneath it all, it's just a layer of abstraction for really complicated arrangement of electrical pathways. A good example to quote is the saying that everything in the universe boils down to physics, and everything in physics boils down to mathematics. 

When we talk about signals in the digital domain, we've abstracted away the complexity by introducing new terms like memory or bits and bytes.

DIGITAL ABSTRACTION $\rightarrow$ ANALOG IMPLEMENTATION

But underneath the hood, it's just really complicated paths electrical signals can take through diodes and transistors. The digital domain offers a much higher vantage point, where you can talk about complicated concepts like input, output, and buffers and memory, without needing to understand the underlying complexity. But the digital representation of analog signals, though they sound really convenient, come with a cost, and a set of limitations.

For better for for worse, we are deeply seated in the digital world today, and understanding the digital domain is key when you are setting up a project to record on a DAW (Digital Audio Workstation) software, or when designing signal processing algorithms for a certain effect, or when just making choices that could either make or break your signal path. 

### Signal Path - Audio Processing vs Transformation

So let's start there, the **signal path**. 

It's a path that a signal takes before reaching its intended target, usually our ears. The simplest signal path is the one that doesn't contain any transformation or processing of the audio signal.

信号路径：借用《通信原理》里面的概念来说明，通信的过程就是信源和信宿通过信道收发信息的过程。一个基本的单向通信系统模型包括：信源、发信机、信道、收信机和信宿。信号路径就是信号从信源开始、至信宿结束所通过的整个路径。

注意区分信号路径和信道[^3]。

Audio can existing in one form or another in 3 broad domains: **physical domain, analog domain and digital domain**. 

In the physical world where we live and breathe, audio exists as physical disturbances of a medium or more simply as pressure waves. These pressure waves are the only way for us to experience the auditory sensation of hearing. In the analog and digital domains, audio exists as information via electrical signals. These signals would need to be converted or transformed back into the physical domain for us to hear it, and until then, it's merely just information and nothing else. 

在模拟电子和数字电子领域，音频是以某种形式的电子信号所表达的信息而存在。音频是信息，这里的音频就开始有“通信”的味道了。

Conversion would need to happen at each step of transforming a pressure wave from the physical domain, to signals in the analog and then to  signals in the digital domain, and similar conversion would need to occur in the opposite direction when transforming the signal back into physical waves.

#### Audio Transformation

1. PHYSICAL: pressure waves
2. ANALOG: continuous voltage signal
3. DIGITAL: discrete data signal

Each step of transformation has a cost associated with it, and none of these steps can offer lossless conversion. Meaning that the audio quality will be degraded and there will be a loss of resolution at each stage, and it's unavoidable. 

信号转化的过程，通常伴随着失真。这仅是保持严谨的学术表达。在当前的工程技术条件下，音频信号完成从模拟信号到数字信号的转化时，采样过程一般不会产生失真，只要保证采样频率大于44.1kHz即可，因为原始音频波形可以根据采样点得到完全重建；量化过程虽然一定会产生失真，但在位深足够的情况下，比如24bit或以上，量化失真的程度可以小到人耳不可辨识。综上，使用合适的技术手段，是可以使音频信号在转化过程中做到无（人耳可辨的）失真。

The scale of degradation however depends on a lot of factors, which we'll look at later. But we generally want to avoid unnecessary transformation stages. 

#### Audio Processing

Audio processing on the other hand is the modification of audio within the same domain, mainly within either the analog or digital domains. 

Examples of audio signal processing are amplification where you boost the strength of the signal, or filtering where you attenuate or remove certain bands of frequencies from the signal. 

- Amplification
- Filtering

In a lot of the cases, this processing is lossless and reversible. 

### Signal Path

Let's get back on track with signal paths. I'll present 3 scenarios where varying levels of transformation is needed.

#### Scenario 1

In scenario 1, the simplest scenario, a natural source produces sound, and we hear it.

Sound source $\rightarrow$ Human ears

The sound exists purely in the physical domain, and no transformation is applied.

音源 $\rightarrow$ 人耳

#### Scenario 2

Moving on to scenario 2, a person is singing into a microphone on a stage, and her voice is being heard to several people through an array of speakers. 

Vocalist  $\rightarrow$  Microphone  $\rightarrow$  Pre-amp  $\rightarrow$  Powered speaker

Here, the vibration of her voice is converted into electric analog signals through an input transducer, in this case a microphone, the signal is then fed to a pre amplifier where the signal from the microphone is boosted up and then fed into an output transducer, in this case a powered speaker, which tries to faithfully convert the analog signal into physical pressure waves by vibrating its cone.

So all in all, there are 2 stages of conversion. 

Physical  $\rightarrow$  Analog  $\rightarrow$  Physical

#### Scenario 3

Scenario 3, let's imagine the same vocalist, is in a studio trying to record herself. 

Vocalist  $\rightarrow$  Microphone  $\rightarrow$  Audio interface (Pre-amp, ADC)  $\rightarrow$  Computer + Hard Drive  $\rightarrow$  Audio interface (Pre-amp, DAC)  $\rightarrow$  Powered studio monitors for playback

There are 4 stages of conversion in all, 2 stages to get the physical wave into a digital form and another 2 in the other direction. 

Since this module is focused towards audio in the digital domain, we'll stick to exploring just that. Specifically the analog to digital conversion, the crux of the transformation and all the nuances associated with it. Let's see what we need to do to convert analog voltage into discrete data.

Alright, let's get into it, let's see what we need to do to transform voltage into data.

[^1]: <strong>Magnetic tape</strong> is a medium for magnetic storage, made of a thin, magnetizable coating on a long, narrow strip of plastic film. It was developed in Germany in 1928, based on magnetic wire recording. Devices that record and playback audio and video using magnetic tape are tape recorders and video tape recorders respectively. A device that stores computer data on magnetic tape is known as a tape drive.

[^2]: A **phonograph record** (also known as a **gramophone record**, especially in British English), or simply a **record**, is an analog sound storage medium in the form of a flat disc with an inscribed, modulated spiral groove. The groove usually starts near the periphery and ends near the center of the disc. At first, the discs were commonly made from shellac, with earlier records having a fine abrasive filler mixed in. Starting in the 1940s polyvinyl chloride became common, hence the name "vinyl".

[^3]: A <strong>communication channel</strong> refers either to a physical transmission medium such as a wire, or to a logical connection over a multiplexed medium such as a radio channel in telecommunications and computer networking. A channel is used to convey an information signal, for example a digital bit stream, from one or several senders (or transmitters) to one or several receivers. A channel has a certain capacity for transmitting information, often measured by its bandwidth in Hz or its data rate in bits per second. Communicating an information signal over space requires some form of pathway or medium. These pathways, called communication channels, use two types of media: cable (twisted-pair wire, cable, and fiber-optic cable) and broadcast (microwave, satellite, radio, and infrared). Cable or wire line media use physical wires of cables to transmit data and information. Twisted-pair wire and coaxial cables are made of copper, and fiber-optic cable is made of glass. In information theory, a channel refers to a theoretical channel model with certain error characteristics. In this more general view, a storage device is also a communication channel, which can be sent to (written) and received from (reading) and allows communicating an information signal over time.

## 2. Sampling Theorem

In this video, we take the first step at the process of converting a continuous signal into a discrete signal for processing within the digital domain, and take a stab at the Nyquist Shannon Sampling Theorem which dictates how often a continuous signal needs to be sampled to accurately recreate it back. There is a lot of misconceptions regarding sample rate and its implications, and this video should hopefully help in clear them up by looking at sampling rates more objectively, or at least give you a starting point for more exploration.  

### Continuous vs Discrete Signals

To simplify our understanding of the conversion from analog to digital signals, we'll start from the simplest periodic analog signal, the humble sine wave. 
$$
y(t)=Asin(2\pi ft + \Phi)
$$
The sine wave is in essence a 1 dimensional function. Though I may have represented the sine wave as a squiggle shape on a 2 dimensional plane, it's actually a single valued spatial point at any given time, if you don't consider time as a dimension of course. 

As you progress time, we can imagine that the sine wave acquires a different value. 

A clear advantage of digital signals over analog signals is in its storage capabilities. 

Analog to digital conversion

Continuous function $\rightarrow$ discrete function

Infinite many  $\rightarrow$ finite

The process of transforming an analog signal to a digital one begins here, by asking the question 

- How often do we want to measure the signal?

- How many samples do we want to have within a given interval of time?

What's the right number? How many samples are enough to accurately represent this wave then?

### Nyquist Shannon Sampling Theorem

Well thankfully, it's not as arbitrary as you think. Continuous to discrete signal conversion is governed by the Nyquist Shannon Sampling Theorem.

Nyquist Shannon Sampling Theorem states that any **band limited** continuous-time signal can be accurately converted to and from digital signals when **sampled at a rate, at least twice as high as the highest frequency** component of the waveform.

The sampling theorem states 2 important facts.

1. That to represent an analog signal in the digital domain, the number of samples that we would need for each second of the signal should be more than twice the highest frequency represented by the signal. 

2. It also states that the analog signal needs to be bandlimited to the highest frequency and cannot contain any frequency above that.

Let's put a pin on the second point, and just talk about the first.

In our case, we had a 1Hz sine wave. This is a constant 1Hz wave, and 1Hz is the highest frequency that this wave function will ever produce. 
$$
y(t)=sin(2 \pi t)
$$
The sampling theorem states that, to digitally represent this wave, we need at least more than 2 sample points. Let's say 3. Any more is fine as well, but the minimum required is 3. We can say that the sample rate is 3Hz.

- Frequency component (cycles per second)

- Sample rate (samples per second)

This is how a 1Hz wave could be sampled using 3 sample points, measured at $t=0, \frac{2\pi}{3}, \frac{4\pi}{3}$.

The absolute beauty of the sampling theorem is that is proves mathematically that both the 3Hz sampled waveform and 40Hz sampled waveform of a 1Hz wave, when reconverted back into its analog form doesn't just produce the same output signal, but produces a signal which is indistinguishable from the original analog input signal before conversion. The input and output signals would be essentially carbon copies of each other with no loss in resolution. 

This seems really strange, because you are essentially stripping out information and discarding it when converting it into a digital signal, and then when you reconvert it back, how is the missing information magically reappearing?

上面这个例子所陈述的内容，有些违反直觉。

在一个频率为1Hz、亦即周期为1s的正弦波信号上，等间距地取3个采样点，与等间距地取40个采样点，在完美地重建原始模拟正弦波形的功效上，二者的功效竟然是等同的。仅凭直觉，取40个采样点，似乎更容易完美地重建原始信号，容易理解；如果仅在 $t=0, \frac{2\pi}{3}, \frac{4\pi}{3}$等间距地取3个采样点，单凭这3个样值序列也可以重建原始正弦波形？从3个样值点推导出一条完整的正弦波曲线，怎么看3个样值点都不太像是一个充分条件。

Well this is where the second point comes into effect, the signal would need to be band limited. 

### Bandlimiting using Low Pass Filter

Bandlimiting is the limiting of a signal's frequency domain representation to zero above a certain finite frequency. A signal is said to be band-limited if the amplitude of its spectrum goes to zero for all frequencies beyond some threshold called the cutoff frequency.

Analog Input Signal $\rightarrow$ Bandlimiter (Maximum representable frequency: 1Hz) $\rightarrow$ ADC

This means that an input signal going into the conversion process is stripped of all frequency components above the maximum of 1Hz and the digital signal once reconverted, is again stripped of all frequency components higher than the maximum of 1Hz. 

Analog Output Signal $\leftarrow$ Bandlimiter (Maximum representable frequency: 1Hz) $\leftarrow$ Sampled Digital Signal

This can be accomplished by using low pass filters. A theoretical low pass filter would only allow the passage of frequencies lower than a set threshhold, and would block all frequencies higher than the threshhold. I mentioned a theoretical low pass filter here, since practical filters can't simply cut off abruptly at a certain frequency but rather ramp down smoothly. 

Allowed frequencies - Attenuated frequencies - Blocked frequencies

More about this later. But let's now look at a more audible example. 


### Sampling examples in Audacity

#### Demo 1

Project sampling rate: 8kHz

Maximum representable frequency: 4kHz

1k Hz working good



Now, let's explore the fringe of possible frequencies, 4kHz. Exactly half the sampling rate.

Project sampling rate: 8kHz

Maximum representable frequency: 4kHz

If we were to create a 4kHz pure tone, with 8KHz sampling rate that means we will have two sample points per periodic cycle, namely at $t=0, \pi$,  with both amplitude values being zero.  So, naturally this is interpreted as no signal at all. Therefore when reconstructed, the original 4kHz pure tone wave is gone. 

注意，数字化采样过程要求的“等间距采样”。在这个例子中，8kHz的采样频率去采样4Khz的正弦波，如果硬性要求“等间距采样”，只能在 $t=0, \pi, 2 \pi, 3 \pi ... n \pi$ 时刻采样，样值序列将全部为零。

But increase the phase offset of the signal by just a bit, and suddenly the wave comes to life. So this is the reason why the sampling theorem states that all frequencies lower than half the sampling rate can be represented accurately, and doesn't say anything about exactly half the sample rate, because it wouldn't be an accurate representation for all scenarios. 



#### Demo 2

What about 3.999kHz?

Sample rate: 8kHz

Signal frequency: 3.999kHz

Conclusion: The 3.999k Hz can be reproduced, but with aliasing artifacts called beating.



#### Demo 3

Sample rate: 11.255kHz

Signal frequency: 3.999kHz

Conclusion: The 3.999kHz can be reproduced, nice and clean, without aliasing.



#### Demo 4

Sample rate: 44.1kHz

Signal frequency: 3.999kHz

Conclusion: The 3.999kHz can be reproduced, nice and clean. without aliasing. However, note that to increase the sampling rate further won't help with the quality of signal reconstruction. 

### Re-conversion of Digital Signals to Analog Signals

Now, when the time arrives when this digital signal needs to be converted into an analog signal for us to listen to it, it goes through a series of electronic circuits. 

Resistor Ladder Circuit, it produces a stair step pattern of an intermediate analog signal. This isn't the final output signal yet. In this form, the analog signal has a lot of super high frequency components, some would even be ultra sonic frequency components which we can't even hear.

The obvious thing to do now would be to cut off these excess frequencies and discard them. And the most obvious place to start would be all the frequencies above half the sampling rate, from which point on will be referred to as the Nyquist frequency. 

{% note green no-icon %}

Analog Input Signal $\rightarrow$ Bandlimiter (Cut off at Nyquist frequency) + ADC $\rightarrow$ Sampled Digital Signal

{% endnote %}

This is because we promised that the input signal would be band limited when it first arrived at analog to digital conversion stage by putting a low pass filter on it with its cutoff as the Nyquist Frequency. 

{% note green no-icon %}

Analog Output Signal $\leftarrow$ Bandlimiter (Cut off at Nyquist frequency) + DAC  $\leftarrow$ Sampled Digital Signal

{% endnote %}

Clearly the output signal would need to adhere to the same rules and the same low pass cut off at the Nyquist Frequency as well. 

And when the filter is applied, the intermediate signal is transformed into this, which is essentially a smoothed out version, which intersects all the points that were previously sampled. And this is where things get interesting. **The signal produced that goes through all these points, is a mathematically unique solution.** 

Intermediate output signal vs Final output signal after bandlimiting (mathematically unique)

There can only be one band limited signal than can pass through all these points, and it is the input signal itself. So, the input signal passed through the analog to digital conversion step, is the only possible signal that can be produced at the output stage of the digital to analog conversion. 

If the output signal were to deviate even slightly from the input signal, it means that it would have to contain frequencies higher than the Nyquist frequency and it would fail to meet the criteria put forth by the sampling theorem about band limiting.  The conversion is mathematically lossless. 

ANALOG - DIGITAL (DIGITAL - ANALOG?) CONVERSION IS MATHEMATICALLY LOSSLESS 

when no additional processing is done in the digital domain

Of course, analog components are never noise free and the whole process would add a little bit of noise into the signal, but if the number of conversions are kept to a minimum, it's never noise that can be heard by our ears. 

and you don't have an on off switch to switch off the filtering.

But what you can see is the output analog waveform.

Do you remember that I mentioned that the low pass filters cannot cut off frequencies exactly at the Nyquist, but would require a smooth ramp? For this reason we need a bit of buffer between the highest frequency that we want to represent and the Nyquist frequency we need to completely cut off at. 

Highest representable frequency $\longleftrightarrow$ Buffer $\longleftrightarrow$ Nyquist frequency (0.5 $f_s$)



### Aliasing Artifacts

This gives us a clue about what could have gone wrong with the 8kHz sampling of the 3999Hz that was amplitude modulating.

Let's imagine the cut off frequency being implemented by Audacity is at 4kHz or the 



Required frequencies, Frequencies to block

Control signal - 3999Hz, Nyquist frequency 4kHz

Intermediate high frequencies

The practical limitations would not allow it to simply cut off all frequencies above that, and there will be some spill over. We know that there will be extra high frequency content, because the intermediate signal will look like this - a stair step pattern. There will be a gradual reduction of frequency content above the Nyquist, but they'll still be there.

This is in direct violation with the sampling theorem which requires there to be no frequencies above the Nyquist. But what happens when there is?

We get the folding of the high frequencies at and above the Nyquist, back on the original signal spectrum, due to a phenomenon called aliasing. Clearly aliasing puts additional frequencies into the output signal which didn't exist previously to begin with, and this is a bad thing and we want to avoid aliasing artifacts.

These extra closely represented high frequency signals folded back on to the original signal is what causes the interfering amplitude changes. 



Audacity Demo

400Hz vs 401Hz

What we can see here and hear, is an acoustical phenomenon called <u>beating</u>[^6]. 



Why these rough data points could be perfectly resembled back to a 3.999kHz sine wave? What's the convergence algorithm behind all this? And how to prove that this sine wave is the only possible solution? The reconstruction of a signal from its samples can be accomplished using the [Whittaker–Shannon interpolation formula](https://en.wikipedia.org/wiki/Whittaker–Shannon_interpolation_formula).

### Practical Sampling Rate and Outro

So for all practical intents and purposes, we want to modify the sampling theorem to suggest that instead of sampling at 2 times of the highest representable frequency, we want to increase that to 2.5 times the highest representable frequency, commonly called the Engineering Nyquist theorem, not because of the mathematical limitations, but practical electronic limitations. 



[^6]: <strong>Beating</strong> is an interference pattern between two sounds of slightly different frequencies, perceived as a periodic variation in volume. More about this in a module on acoustic. 

## 3. Common Audio Sample Rates

In this video, we take what we learnt from the previous video on the Nyquist Shannon Sampling Theorem and apply it to real world audio signals. We discover some of the commonly used sample rates used in audio consumption and transmission and the advantages and disadvantages of using them. We look at the difference between bandwidth in the context of signal and the context of transmission, and discuss why lower rates are ideal for consumption, and higher rates are only required during signal processing.   

### Intro to Sampling Theory

Human hearing range 20Hz - 20kHz

Sample rate $\approx$ 2.5 * 20kHz

Nyquist frequency = 0.5 * sample rate

### Common Audio Sample Rates

Sample rate = 44.1kHz

Nyquist frequency = 22.05kHz

Guard band = 2.05kHz



Sample rate = 48kHz

Nyquist frequency = 24kHz

Guard band = 4kHz



Sample rate = 96kHz

Nyquist frequency = 48kHz

Guard band = 28kHz

### Bandwidth

In the context of signals in general, it means a range of frequencies.

Take 44.1kHz sampling rate for example. This sample rate can theoretically represent frequencies from 0Hz to 22050Hz. Its range or bandwidth is said to be 22050Hz.

But bandwidth in the context of transmission has a slightly different implication.

But in this context, it's the maximum rate at which information can be flooded through the medium. You can think of it as the information rate or data rate.  This rate has a tendency to affect the choice of audio bandwidth that we select, but is generally dependent on the application.

For example if you want to transmit audio to your speakers through an amplifier in your own home, even conventional copper cables like coaxial cables have a bandwidth of several hundred megahertz. 

Bandwidth: 10MHz / 500Mbps 

Questions: How to compute? What determine(s) the bandwidth of a transmission medium?

When comparing that to even the most generous sample rate chosen for audio, transmitting multichannel audio through these cables is a breeze, with a lot of bandwidth of spare.

Single channel digital audio

Sampled at 96kHz / 24bit:

Bit rate = 230400bps = 2.3Mbps

### 8kHz

Phone lines - Efficiency, low cost vs audio quality

Audio Sample Rate = 8kHz

Intelligibility of human speech 300Hz -  3.4kHz

Bandwidth: 3.1kHz

Nyquist Frequency 4kHz

Guard band 0.6kHz

### Sampling with Audacity



### 16kHz

Applications in VOIP (Voice Over Internet Protocol) such as Skype and Whatsapp

### 44.1kHz

Full representation of all audible frequencies

### 48kHz

Predominantly used along with video

### Higher Sampling Rates

Are higher sampling rates unnecessary? Not at all. 

If you are interested in hardware design, or signal processing, or into building applications, and writing plugins, you are likely to use higher sampling rates by means of oversample in the digital domain to avoid aliasing. 

Are filters capable of achieving this cut-off? Why filtering at the input stage is needed to begin with? We need to look at aliasing in further detail. 

## 4. Understanding Aliasing

In this video, we demistify and take a stab at understanding aliasing in audio signals. We start off the discussion by looking at how aliasing could occur in video signals by looking at the wagon wheel effect and how the aliasing pattern that you visually see can be applied to understand the concept of aliasing in audio signals. We force aliasing to occur in the digital domain by using the Nyquist programming language, draw a pattern, and derive a formula for predicting the aliased frequencies. We illustrate the process of sampling and see how a low sampling rate coupled with high frequencies can cause aliasing. We take the discussion towards real world observations of aliasing in square waves, and how to counter them manually using oversampling and downsampling.

### Wagon Wheel Effect

It exisits because any analog or digital video that we are used to in the conventional form, is not continuous by any means. It's a series of still pictures projected on a screen in rapid succession. 

24 frames per second

24 still images, distributed within  a span of 1 second. **What happens when we try to capture something fast?** You get a lot of visual artifacts and the wagon wheel effect is one of them. I happens when the successive frames of images conincide with the previous frame's position after the rotation. 

The rotational speed required to achieve a standstill illusion depends of the general shape of the wheel and the number of spokes it has. But simplifying the wheel to just 1 spoke, we can see that when the rotation of the body is 

1. less than 12 rotations per second, $f < \frac{1}{2}f_s$, we can generally make out the direction of rotation based on these individual frames. 
2. at exactly 12 rotations per second, $f = \frac{1}{2}f_s$, not much can be determined
3. beyond 12 rotations per second, $f > \frac{1}{2}f_s$, we can see that the individual frames tell a different story. 

When given this set of still images, rendered at the right speed, there is only one possible conclusion we can draw, that the rotation is in the opposite direction. The still frames are essentially portraying a false perception of direction, because we broke the boundary above which we don't have enough frames to accurately depict that true picture, and this phenomenon is called temporal aliasing. 

This seems awfully familiar to our earlier discussions on aliasing within audio signals. 

### Temporal Aliasing

We can almost substitute the same terminology here, and say that the video is sampled at 24 frames a second, and that 12 frames is the Nyquist limit we need to abide by. 

sample rate: 48kHz $\rightarrow$ frames per second: 24

Nyquist rate: 24kHz $\rightarrow$ rotations per second: >12

In fact aliasing doesn't just occur in audio and video signals, it occurs in any form of signal which is discrete and is constrained by some sampling parameters.

Let's get into temporal aliasing in audio signals. Before we delve into illustrating how a low sampling rate coupled with high frequencies can cause aliasing, we'll first listen to what aliasing sounds like. And this is generally harder than it seems, because modern signal paths are really good at eliminating aliasing. When an analog signal passes through an analog to digital converter, if filters out all frequencies above the Nyquist rate, and when the sampled digital signal passes through a digital to analog converter, essentially the same process of filtering occurs. 

modern analog components are good: low pass filter, cut off at the Nyquist frequency

We can't bypass these steps to force aliasing, because they are baked into the analog circuitry. Our only hope is to introduce higher frequencies within the signal in the digital domain. Even then, modern commercial applications and plugins such as pitch shifters, compressors and ring modulators, which actually create higher frequencies within our digital audio signals, are aware that aliasing is a possibility when the signal is processed, and they account for it by internally oversampling the signal. Sometimes this mechanism is transparent, and you wouldn't even know that it's happening, and sometimes they give you the option to choose they degree of oversampling. 

modern analog components are good, so are software plugins

As a producer of music then, you are well insulated from the effects of aliasing in most cases. But as a developer, battling the effects of aliasing could be daunting. The aim of this video is to just give enough clarity and understanding of aliasing, irrespective of what you plan to do, and hopefully you can continue the investigation further depending on your needs and use cases. 

### Forcing Aliasing in Audacity



### Sampling Illustrated

### Aliasing from Square Waves

### Solutions for avoid Aliasing

## 5. Quantization

In this video, on our quest to create a discrete signal out of a continuous signal, we will begin the discussion on how amplitude values of each sampled signal is represented and stored. We'll discuss how the determination of resolution of a sample is lossy when compared to sampling. Finally, we'll look at the real world effects of quantization and bit depth on digital audio - namely noise and dynamic range.

So we really need to put our foot down and draw a line to represent the maximum resolution that we are willing to maintain. You can think about it as the **accuracy of measurement**.

- Low resolution
- High resolution

Unlike the sampling rate, governed by the sampling theorem, which pretty much guarantees lossless conversion beyond a certain rate, the determination of resolution is not quite lossless.

Process of digitization

- lossless sampling means lossless in frequency components
- lossy resolution means there always are quantization errors no matter what 

Sampling along the time axis determines the maximum frequency you can represent. The higher the sampling rate, higher is the capacity for frequency representation within the digital signal.

The size of the sampling interval along the amplitude axis or the y-axis in this case determines the **maximum dynamic range** that the digital signal can represent. 

Dynamic Range is the range between the highest and lowest amplitude moments of the sound.

**0dBFS** vs **-40dBFS** then Dynamic Range: 40dBFS

Sample Resolution

Accuracy of measurement

Image Resolution $\neq$ Audio Resolution

When I talk about resolution, I mean the **accuracy of values** of sample points being maintained.

The resolution only impacts the amount of noise present in the digitized signal. This noise affects the overall dynamic range that is available. 

### Demo and introduces the definition of Quantization

Quantization 

Mapping analog values to a limited range of discrete valus

You can think about quantization as a latch, which either pulls or pushes a sample value to the nearest discrete measure. As you can see, with 8 discrete points, the resolution is quite poor. This is in fact a 3 bit resolution, but more about bits and bit depth later. 

Bit depth: 3			Number of levels: $2^3 = 8$

Sample Resolution

You could, at this point of time, plot a graph, with the y-axis as the difference between the **original analog signal** value, and **discrete digital signal** value that the signal is constrained to. You'd get something like this, which represents the quantization error within our digital signal when compared to the original analog signal. 

original analog signal - discrete digital value = quantization error signal

Accurately quantized sine wave

Quantization levels: 65,536 (16 bits)

Poorly quantized sine wave

Quantization levels: 8 (3 bits)

Quantization error / noise isolated (listen to the error /  noise only)

This error causes unintended noise to permeate into the digital signal due to the low number of discrete points.

And the **dynamic range** of the digitized signal is just the difference between the highest discrete point the signal is represented on, on the upper end, to the amplitude of the quantization error itself, since any audio representation below this noise floor is just masked by the noise or error signal. 

### Quantization and Bit Depth

In all but the worst circumstances, quantization and bit depth isn't something that you need to worry about. Choosing a default bit depth anywhere between 16bits to 24bits on your audio converters or programs, should do you perfectly well in most situations. Modern advances in digital technology can let you get away with bit depths as low as 8bits and still offer better dynamic range than an analog medium like the cassette tape. So, is it worth studying about it?

|                           | 16 bits          | 24 bits                  |
| ------------------------- | ---------------- | ------------------------ |
| Number of discrete levels | $2^{16}=65,536$  | $2^{24}=16,777,216$      |
| Dynamic range             | 96.33 dB         | 144.49 dB                |
| Common usage              | CD audio quality | DVD/Bluray audio quality |

As according to the definition of decibel
$$
1 dB = 10log_{10}\left(\frac{X^2}{X^2_{ref}}\right) = 20log_{10}\left(\frac{X}{X_{ref}}\right)
$$
so dynamic range of 16 bits
$$
DNR_{16} = 20log_{10}\left(\frac{65536}{1}\right)=96.33 dB
$$
dynamic range of 32 bits
$$
DNR_{32} = 20log_{10}\left(\frac{16777216}{1}\right)=144.49 dB
$$


Certain musical applications will require the highest dynamic range possible, like the audio in film played in cinemas and theaters. You'd want to hear the whispers between characters, against the quiet and acoustically treated backdrop of a good movie theater, while not hearing any digital noise. Any on the other end of the loudness spectrum, you'd want to hear the deafening sounds of a stuka dive bomber descending. A **wide dynamic range** in this case is really important to tell the **right story**.

On the other hand, certain genres of music, like dance music, electronica or metal, don't require a wide dynamic range, since the music is generally loud all the time. A listening environment makes a lot of difference as well, listening to songs on a car stereo system while driving drops the overall dynamic range that's available to us. 

Dynamic range of the human ear

- 130 dB SPL Threshold of pain

- 0 dB SPL Threshold of hearing

That's because of the road, wind and traffic noise all act together to reinforce the noise floor, lower than which our music from the stereo is just not heard. 

More importantly, our stud on bit depth and quantization will inadvertently lead us to explore several other concepts like the noise floor, the signal to noise ratio, headroom, dynamic range, the bitwise representation of digital audio, binary arithmetic, dithering and nose shaping. So if you fancy any of that, do carry on. 

## 6. Bit Depth

In this video, we'll explore the concept of binary representation of states as bit, and how bit depth applies to representing audio amplitude levels. We'll examine the real world affects and artifacts of low resolution audio file and hear the effects of quantization noise or error. We'll look at signal to quantization noise ratio (SQNR) as a metric for measuring the dynamic range of signals. 



### 4 bit audio demo

We'll look at a snapshot of audio which is centered around a baseline. 

What you listened to was produced at a sample rate of 44.1kHz, and a bit depth of 16 bits. This is your average CD quality music. You can't really notice anything wrong with it. 

Audacity also translate the samples in this audio file into 32 bits.

Let's reduce the bit depth to 4 bits.



### Properties of quantization error

There are 2 really interesting facts that can deduce from this new track. 

1. The noise is a function of the audio. It isn't white noise or randomly generated noise. The noise is determined by the underlying audio.
2. The noise amplitude / power is constant.

### 8 bit audio demo

As you listen to the track, depending on how and where you're listening to it, you may or many not hear the noise. But it's low enough that it may not be heard if you are listening to it in a noisy environment or if you are listening to it at low volume. You can hear the noise better in quieter sections of the track.

Based on these observations, we can postulate that quantization can add a degree of error into the signal, and this error is heard as broadband noise. 

| 4 bits         | 8 bits         | 16 bits        |
| -------------- | -------------- | -------------- |
| 16 levels      | 256 levels     | 65,536 levels  |
| -24 dBFS noise | -48 dBFS noise | -96 dBFS noise |



### Signal to Quantization Noise Ratio (SQNR)

Signal to Quantization Noise ratio or SQNR is a widely used metric in measuring the quality of the analog to digital conversion process. Though it's not the only metric used, it gives us an idea about the dynamic range that's possible for a given bit depth. 
$$
SQNR =20\log_{10}(2^{Q}) \approx 6.02\cdot Q
$$
where Q is the number of quantization bits.

#### 16 bits

$$
SQNR =20\log_{10}(2^{Q}) \approx 6.02\cdot 16 = 96dB
$$



Now, what does this mean in practice?

It means that if you are in the quietest setting possible, you'll have to drive a 16bit audio track up to 96dB of loudness, which is quite high, to even begin to hear the noise associated with quantization. 

If we are seated in a soundproofed anechoic chamber and an audio track produced at 16 bits of resolution is played back at a deafening 110 decibels, during the quietest parts of this audio track or during silences, you could easily hear the quantization noise, as it would be around $110dB - 96dB = 14dB$ loud. 

But if you're in your living room, listening to music at comfortable levels, the noise floor (14dB) of the signal is well below the threshold of hearing (40dB), and the noise is never heard.

What about 24 bits then?

#### 24 bits

$$
SQNR =20\log_{10}(2^{Q}) \approx 6.02\cdot 24 = 144dB
$$

That's a bigger dynamic range than we can even perceive. You can be confident that with a 24 bit depth audio track, no matter what the listening environment is, no matter what the application, you'd never be able to hear the quantization noise. 

### Nature of noise

Now, the interest thing is that bit depth isn't the final factor which determines the loudness of the quantization noise.

I'm not saying that the amount of noise or the noise power would differ from the same bit depth. In fact, no matter what you do, at 16 bit resolution, you'll always have a constant noise power, which is represented as -96dB of full scale amplitude. 

16 bits of resolution will always result in an SQNR of 96dB.

But the type of noise you hear can be changed.

## 7. Dithering Explained

In this video, we'll explore the concept of dithering and why we need it. Dithering is the process of intentionally adding noise to a signal during quantization to preserve low level information and prevent correlated distortion. The video tries break down this definition through image and audio illustrations.

### Dithering Intro

Dithering, is the process of **intentionally adding noise** to a signal, during the process of **quantization**, to **preserve low level information** and **prevent correlated distortion**.

### Image Dithering

- 8-bit grayscale image - each pixel can store 256 different possible monochromatic values.

- 1-bit black & white image 

Let's see how we can try and preserve some of the data when we step down the resolution.

This is the same image but with noise added to it. 8-bit grayscale with **noise**.

A random value between 0  to 50% of luminance of the full scale is added to or subtracted from each pixel in this image.

Now when we try to truncate the resolution down to 1 bit, we get this. 1-bit black & white with dither

This is considerably more detailed than the 1-bit image that was generated when the original was not dithered.

If you look at this image more closely, you can see that there are still only 2 possible values, but the density distribution of the black pixels is different at different parts of the image, and this gives you the perception of information being preserved. 

This was, like most things, an exaggerated example. And things don't exactly translate the same between image processing and audio processing. But we can infer a couple of points from the image dithering example. 

Noise only needs to be applied if you are reducing the resolution of the source. In other terms, noise only needs to be applied if you are truncating the word length, or lowering the bit depth.

### Dithering to Preserve Information

Let's look at an example. Here we have a piano chord sustained. 

In the DAW software, the samples of this audio file exist as 32-bit floating point numbers. When any processing is done in the digital domain, the operations and calculations occur with 32 bits of high precision. 

32-bit floating point  $\rightarrow$  24-bit / 16-bit integer

Let's go a step down and produce it at 8bits of resolution. 

Any place where audio leaves the digital domain and enters the analog domain is where truncation happens (not vice versa?). It's unavoidable. 

In the beginning the noise that you hear is 8bit quantization noise. The quantization noise is almost like broadband white noise.

But towards the end, when the audio is fading to silence, we get this tearing noise that is incredibly distracting. Why does this happen? Let's look at this interactive widget created by Nigel Redmon.

Signal to Quantization Noise Ratio (SQNR) is low, when the signal level is low. At around half a quantization level or half of the Least Significant bit, we are at the fringe of what is quantizable (it's at the critical point of being either rounded to 1 or 0). And if the signal level dips below that, the quantized signal is rounded to zero and all detail is lost. 

Any amount of amplitude modulation when the signal is fading out, could lead to the quantization signal jumping in and out of silence. This causes the unmistakable tearing sound that you hear in poorly quantized or undithered masters.

Let's see what dither can do for us.

We can hear that the tearing noise is gone and is just replaced by constant noise. Is this better?

You've gotta remember that most digital recordings are saved at a bit depth of 16 bits or higher. Which means that the noise associated with a 16 bit audio track is about 48 db lower (how to calculate and derive?) than this, and almost inaudible. 

Noise, especially white noise is remarkably undistracting to our hearing perception. The brain usually tunes out a little bit of white noise in a mix. On the other hand, sudden jumps and cuts in even low level noise can immediately be noticed and turns our attention towards it. 

This is what we are trying to avoid using dithering. But how does adding noise actually solve this problem. We turn back to the widget. 

### Closer Look

What dithering does is add a random value to each of the original sample values.

Original sample  $\rightarrow$  Sample with noise 

The range of the random value depends on system to system, but in this case, and generally in most cases, the range is 2 LSBs (Least Significant Bits). A maximum of 1 LSB can be added to the original sample, and a minimum of 1 LSB can be subtracted from the original sample. 

The reason why I mentioned LSB here, and not some concrete value is that the range is dependent on the target bit depth. 

|                    Bit depth | Linear range (+1 to -1)               |
| ---------------------------: | ------------------------------------- |
|                     00000001 | $0.0078=2 \times\frac{1}{2^8}$        |
|           00000000  00000001 | $0.00003=2 \times\frac{1}{2^{16}}$    |
| 00000000  00000000  00000001 | $0.00000012=2 \times\frac{1}{2^{24}}$ |

For instance, the random value range for a target bit depth of 8 is much larger than the randomness required for a target of 16 bit. 

Size of LSB

Let's connect the dots to visualize the plot better.

Now that we have a signal, with a randomized noise or dither added to it, when the resolution is lowered, the signal is rounded to the nearest discrete level. You can see that when the signal level is lowered below the quantizable level, where the original signal would have been rounded to zero, the noise within the signal allows the dithered signal to be rounded up from time to time, thereby keeping the noise floor constant. 

What you get with dither is a constant and predictable noise floor rather than the instantaneous dropout of signal from noise to silence. 

This isn't the only problem dither solves. 

### Dithering to Prevent Distortion

Let's bring back the definition.

Dithering, is the process of **intentionally adding noise** to a signal, during the process of **quantization**, to **preserve low level information** and **prevent correlated distortion**.

white noise

The error isn't random anymore, it's correlated.

 

### When and Where to Dither

By now you should have a fairly good understanding of what dither does and why it's needed.

When is dithering needed? re-quantization

Always dither when:

- 32-bit to 16-bit
- 24-bit to 16-bit
- 16-bit to 16-bit

Don't dither when:

- 32-bit to 24-bit
- 24-bit to 24-bit

Because the noise floor would be well below the threshold of hearing and so it's never heard.

## 8. Dither Types



## 9. Noise Shaping



## 10. Pulse Code Modulation

Pulse Code Modulation is an encoding mechanism, a way of representing digital data for the purposes of transmission and storage. But what form does this encoding take, and why is it needed? In this video, we'll explore the the concept of encoding and modulation as a corner stone of digital audio. We'll start from first principles and discover different modulation strategies and their advantages, and naturally arrive at why PCM is so resilient and has survived the test of time. 

### Encoding

The final piece is encoding - a way of digitally representing sampled and quantized data.

The title of this video is Pulse Code Modulation, and pulse code modulation is a specific type of encoding strategy. 

- Commonly used
- Easy to understand
- Antecedent to all other methods

### Frequency Modulation

FM is frequency modulation.

Audio band (20Hz - 20kHz) doesn't have enough power for transmission - what do that mean?

We start with a really high frequency <u>carrier wave</u>[^4], which is going to carry our music, which is going to be encoded within it. 

- Carrier Signal  - how high?
- Audio Signal 20Hz - 20kHz

We modulate the frequency parameter of this carrier wave corresponding to the instantaneous changes of amplitude in the music signal. The change in amplitude of the music is encoded as change in frequency within the carrier. 

如果我们单纯从整体的角度，而不是从每个频率分量合成的角度，去看待声音，那么在时域，声音可以被看成一个振幅随时间上下波动的函数。可以使用Audacity打开任意一个音乐文件，在时域高倍放大，可以看到声音波形随时间的变化。

This carrier signal has loads of advantages during transmission. Since it has a very high base frequency, it has a lot of energy and can be transmitted larger distances with little amplification. 

- High frequency = High energy
- Less power required for transmission
- Unaffected by interference/noise

And since the music is encoded within the frequency of the carrier, and since interference noise only affects the amplitude, the underlying music is unaffected by environmental noise. Once we receive the carrier signal however, it can't directly be played back. The carrier signal would need to be reverse engineered and demodulated to extract the music signal from it. 

All of what I described here happens purely in the analog domain. There are no digital signals here nor any digital processes. So why did I talk about Frequency modulation here?

I talked about it, because the concept of modulation and encoding are transferable concepts and can be used in the digital domain. Modulation is simply a means of encoding information for purposes such as transmission or storage. 

Here, instead of modulating the frequency, we could just as easily have modulated the amplitude of the carrier wave or the phase, and in fact, these are legitimate encoding schemes, amplitude modulation and phase modulation. They come with their own set of advantages and disadvantages. But all that matters is the underlying music, and the use case that determines which types of modulation to use.

There may be several different encoding schemes but they have a singular purpose - to transmit or store the underlying music as faithfully as possible, without any changes to the original. 

Frequency modulation, as mentioned before, applies to continuous analog signals. For the transmission and storage of discrete digital signals, we need a different approach. 

### Pulses - Digital encoding 

Let's take this sinusoid for instance in its analog form. To begin the process of transformation from analog to digital, we need the prerequisites, sampling and quantization. Enough has been said about these 2 processes already, so to sum them up, sampling is simply the process of chopping the signal along the time axis, at equal intervals of time. We are only interested in the signal's instantaneous amplitude at these specific intervals. 

Sampling: Making signal measurements at discrete and equal intervals of time

Quantization on the other hand, is simply the process of placing a limit on the number of possible discrete values that the amplitude level can take on. 

### Pulse Width Modulation 

### Pulse Position Modulation 

### Pulse Amplitude Modulation 

### Pulse Code Modulation 

### Bandwidth of PCM 

### Overview of ADC

[^4]: **载波**（carrier wave）是指被调制以传输信号的波形，一般为正弦波。一般要求正弦载波的频率远远高于调制信号的带宽，否则会发生混叠，使传输信号有损。 可以这样理解，我们一般需要发送的数据的频率是低频的，如果按照本身的数据的频率来传输，不利于接收和同步。使用载波传输，我们可以将数据的信号加载到载波的信号上，接收方按照载波的频率来接收数据信号，有意义的信号波的波幅与无意义的信号的波幅是不同的，将这些信号提取出来就是我们需要的数据信号。 载波就是携带信息/信号的波形，它携带的方式是进行频率、幅度、相位间隔调制。电子计算机科学中，基带（baseband）加上载波（carrier wave）而成为宽带（broadband）。

## 11. Multiplexing and Error Correction



## 12. Containers and File Formats

## 13. References

https://www.electronicdesign.com/technologies/analog/article/21806048/the-front-end-filtering-or-bandlimiting

通信原理 第3版	高媛媛	机械工业出版社	2020.6	ISBN 978-7-111-66043-9	第8章 模拟信号的数字传输
