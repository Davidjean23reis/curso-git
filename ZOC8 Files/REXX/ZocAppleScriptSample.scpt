FasdUAS 1.101.10   ��   ��    k             l      �� ��   .(	This is a simple exsample to show how to 
	automate ZOC from AppleScript.
	
	Please note that ZOC's AppleScript support is
	rather rudimentary and merely provides a
	bridge into ZOC's native scripting commands.  
	
	(See help topic at the bottom of ZOC's 
	"Script" menu for more information.) 
       	  l     ������  ��   	  
�� 
 l    Q ��  O     Q    k    P       l   ������  ��        l   �� ��    @ : inform zoc to be prepared for incoming AppleScript calls          I   	������
�� .ZOC!StaCTEXT    ��� null��  ��        l  
 
������  ��        l  
 
�� ��    < 6 a simple zoc-command (see "ZOC REXX Commands" in the          l  
 
�� ��    %  help menu for a complete list)         r   
    !   I   
 �� "���� 0 
zocrequest 
ZocRequest "  # $ # m     % %  What do you like?    $  & ' & m     ( (  Apples    '  )�� ) m     * *  Oranges   ��  ��   ! o      ���� 	0 reply     + , + l   ������  ��   ,  - . - l   �� /��   /   hmm, not liking apples?    .  0 1 0 Z    - 2 3���� 2 H     4 4 =    5 6 5 o    ���� 	0 reply   6 m     7 7  Apples    3 k    ) 8 8  9 : 9 l   �� ;��   ; 9 3 just for the fun of it, use the alternative syntax    :  < = < l   �� >��   > !  to invoke the same command    =  ?�� ? r    ) @ A @ I   '�� B C
�� .ZOC!PerfTEXT       TEXT B m     D D  
Zocrequest    C �� E��
�� 
Usin E J    # F F  G H G m     I I 5 /Let us clarify the question a bit: Do you like?    H  J K J m      L L  Apples    K  M�� M m     ! N N  Apples   ��  ��   A o      ���� 	0 reply  ��  ��  ��   1  O P O l  . .������  ��   P  Q R Q Z   . H S T���� S =  . 1 U V U o   . /���� 	0 reply   V m   / 0 W W  Apples    T k   4 D X X  Y Z Y I   4 9�������� 0 zoccls ZocCls��  ��   Z  [�� [ I   : D�� \���� 0 
zocwriteln 
ZocWriteln \  ]�� ] b   ; @ ^ _ ^ m   ; > ` ` ! Good to hear that you like     _ o   > ?���� 	0 reply  ��  ��  ��  ��  ��   R  a b a l  I I������  ��   b  c d c l  I I�� e��   e 7 1 inform zoc that the script conversation is over     d  f g f I  I N������
�� .ZOC!EndCTEXT    ��� null��  ��   g  h�� h l  O O������  ��  ��    m      i i�null     ߀�� \�zoc6.app �U  ��8 'Wi�����   ��~ P�6 �����4e�Wi�p} h����Be�l�ZOC!   alis    X  Tiger                      �((�H+   \�zoc6.app                                                        6���k2Z        ����  	                Debug     �(�      �k$J     \� W h�  N  *Tiger:Users:mschmidt:Builds:Debug:zoc6.app    z o c 6 . a p p    T i g e r  $Users/mschmidt/Builds/Debug/zoc6.app  /    ��  ��  ��       �� j k��   j ��
�� .aevtoappnull  �   � **** k �� l���� m n��
�� .aevtoappnull  �   � **** l k     Q o o  
����  ��  ��   m   n  i�� % ( *���� 7 D�� I L N�� W�� `����
�� .ZOC!StaCTEXT    ��� null�� 0 
zocrequest 
ZocRequest�� 	0 reply  
�� 
Usin
�� .ZOC!PerfTEXT       TEXT�� 0 zoccls ZocCls�� 0 
zocwriteln 
ZocWriteln
�� .ZOC!EndCTEXT    ��� null�� R� N*j O*���m+ E�O��  �����mvl E�Y hO��  *j+ O*a �%k+ Y hO*j OPUascr  ��ޭ